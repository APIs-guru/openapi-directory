package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

type Versions struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewVersions(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Versions {
	return &Versions{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CreateArtifactVersion - Create artifact version
// Creates a new version of the artifact by uploading new content.  The configured rules for
// the artifact are applied, and if they all pass, the new content is added as the most recent
// version of the artifact.  If any of the rules fail, an error is returned.
//
// The body of the request should be the raw content of the new artifact version.  This
// is typically in JSON format for *most* of the supported types, but may be in another
// format for a few (for example, `PROTOBUF`).
//
// The registry attempts to figure out what kind of artifact is being added from the
// following supported list:
//
// * Avro (`AVRO`)
// * Protobuf (`PROTOBUF`)
// * Protobuf File Descriptor (`PROTOBUF_FD`)
// * JSON Schema (`JSON`)
// * Kafka Connect (`KCONNECT`)
// * OpenAPI (`OPENAPI`)
// * AsyncAPI (`ASYNCAPI`)
// * GraphQL (`GRAPHQL`)
// * Web Services Description Language (`WSDL`)
// * XML Schema (`XSD`)
//
// Alternatively, you can explicitly specify the artifact type using the `X-Registry-ArtifactType`
// HTTP request header, or by including a hint in the request's `Content-Type`.
//
// For example:
//
// ```
// Content-Type: application/json; artifactType=AVRO
// ```
//
// This operation can fail for the following reasons:
//
// * Provided content (request body) was empty (HTTP error `400`)
// * No artifact with this `artifactId` exists (HTTP error `404`)
// * The new content violates one of the rules configured for the artifact (HTTP error `409`)
// * A server error occurred (HTTP error `500`)
func (s *Versions) CreateArtifactVersion(ctx context.Context, request operations.CreateArtifactVersionRequest) (*operations.CreateArtifactVersionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/artifacts/{artifactId}/versions", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateArtifactVersionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.VersionMetaData
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.VersionMetaData = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 409:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 500:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetArtifactVersion - Get artifact version
// Retrieves a single version of the artifact content.  Both the `artifactId` and the
// unique `version` number must be provided.  The `Content-Type` of the response depends
// on the artifact type.  In most cases, this is `application/json`, but for some types
// it may be different (for example, `PROTOBUF`).
//
// This operation can fail for the following reasons:
//
// * No artifact with this `artifactId` exists (HTTP error `404`)
// * No version with this `version` exists (HTTP error `404`)
// * A server error occurred (HTTP error `500`)
func (s *Versions) GetArtifactVersion(ctx context.Context, request operations.GetArtifactVersionRequest) (*operations.GetArtifactVersionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/artifacts/{artifactId}/versions/{version}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetArtifactVersionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 500:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// ListArtifactVersions - List artifact versions
// Returns a list of all version numbers for the artifact.
//
// This operation can fail for the following reasons:
//
// * No artifact with this `artifactId` exists (HTTP error `404`)
// * A server error occurred (HTTP error `500`)
func (s *Versions) ListArtifactVersions(ctx context.Context, request operations.ListArtifactVersionsRequest) (*operations.ListArtifactVersionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/artifacts/{artifactId}/versions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ListArtifactVersionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int64
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListArtifactVersions200ApplicationJSONInt64Integers = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 500:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// SearchVersions - Search artifact versions
// Searches for versions of a specific artifact.  This is typically used to get a listing
// of all versions of an artifact (for example, in a user interface).
func (s *Versions) SearchVersions(ctx context.Context, request operations.SearchVersionsRequest) (*operations.SearchVersionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/search/artifacts/{artifactId}/versions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SearchVersionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.VersionSearchResults
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.VersionSearchResults = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 500:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// UpdateArtifactVersionState - Update artifact version state
// Updates the state of a specific version of an artifact.  For example, you can use
// this operation to disable a specific version.
//
// The following state changes are supported:
//
// * Enabled -> Disabled
// * Enabled -> Deprecated
// * Enabled -> Deleted
// * Disabled -> Enabled
// * Disabled -> Deleted
// * Disabled -> Deprecated
// * Deprecated -> Deleted
//
// This operation can fail for the following reasons:
//
// * No artifact with this `artifactId` exists (HTTP error `404`)
// * No version with this `version` exists (HTTP error `404`)
// * Artifact version cannot transition to the given state (HTTP error `400`)
// * A server error occurred (HTTP error `500`)
func (s *Versions) UpdateArtifactVersionState(ctx context.Context, request operations.UpdateArtifactVersionStateRequest) (*operations.UpdateArtifactVersionStateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/artifacts/{artifactId}/versions/{version}/state", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateArtifactVersionStateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 500:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}
