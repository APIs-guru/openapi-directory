package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

type Artifacts struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewArtifacts(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Artifacts {
	return &Artifacts{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CreateArtifact - Create artifact
// Creates a new artifact by posting the artifact content.  The body of the request should
// be the raw content of the artifact.  This is typically in JSON format for *most* of the
// supported types, but may be in another format for a few (for example, `PROTOBUF`).
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
// Alternatively, you can specify the artifact type using the `X-Registry-ArtifactType`
// HTTP request header, or include a hint in the request's `Content-Type`.  For example:
//
// ```
// Content-Type: application/json; artifactType=AVRO
// ```
//
// An artifact is created using the content provided in the body of the request.  This
// content is created under a unique artifact ID that can be provided in the request
// using the `X-Registry-ArtifactId` request header.  If not provided in the request,
// the server generates a unique ID for the artifact.  It is typically recommended
// that callers provide the ID, because this is typically a meaningful identifier,
// and for most use cases should be supplied by the caller.
//
// If an artifact with the provided artifact ID already exists, the default behavior
// is for the server to reject the content with a 409 error.  However, the caller can
// supply the `ifExists` query parameter to alter this default behavior. The `ifExists`
// query parameter can have one of the following values:
//
// * `FAIL` (*default*) - server rejects the content with a 409 error
// * `UPDATE` - server updates the existing artifact and returns the new metadata
// * `RETURN` - server does not create or add content to the server, but instead
// returns the metadata for the existing artifact
// * `RETURN_OR_UPDATE` - server returns an existing **version** that matches the
// provided content if such a version exists, otherwise a new version is created
//
// This operation may fail for one of the following reasons:
//
// * An invalid `ArtifactType` was indicated (HTTP error `400`)
// * No `ArtifactType` was indicated and the server could not determine one from the content (HTTP error `400`)
// * Provided content (request body) was empty (HTTP error `400`)
// * An artifact with the provided ID already exists (HTTP error `409`)
// * The content violates one of the configured global rules (HTTP error `409`)
// * A server error occurred (HTTP error `500`)
func (s *Artifacts) CreateArtifact(ctx context.Context, request operations.CreateArtifactRequest) (*operations.CreateArtifactResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/artifacts"

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

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateArtifactResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ArtifactMetaData
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ArtifactMetaData = out
		}
	case httpRes.StatusCode == 400:
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

// DeleteArtifact - Delete artifact
// Deletes an artifact completely, resulting in all versions of the artifact also being
// deleted.  This may fail for one of the following reasons:
//
// * No artifact with the `artifactId` exists (HTTP error `404`)
// * A server error occurred (HTTP error `500`)
func (s *Artifacts) DeleteArtifact(ctx context.Context, request operations.DeleteArtifactRequest) (*operations.DeleteArtifactResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/artifacts/{artifactId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
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

	res := &operations.DeleteArtifactResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
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

// GetArtifactByGlobalID - Get artifact by global ID
// Gets the content for an artifact version in the registry using its globally unique
// identifier.
//
// This operation may fail for one of the following reasons:
//
// * No artifact version with this `globalId` exists (HTTP error `404`)
// * A server error occurred (HTTP error `500`)
func (s *Artifacts) GetArtifactByGlobalID(ctx context.Context, request operations.GetArtifactByGlobalIDRequest) (*operations.GetArtifactByGlobalIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/ids/{globalId}", request.PathParams)

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

	res := &operations.GetArtifactByGlobalIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetLatestArtifact - Get latest artifact
// Returns the latest version of the artifact in its raw form.  The `Content-Type` of the
// response depends on the artifact type.  In most cases, this is `application/json`, but
// for some types it may be different (for example, `PROTOBUF`).
//
// This operation may fail for one of the following reasons:
//
// * No artifact with this `artifactId` exists (HTTP error `404`)
// * A server error occurred (HTTP error `500`)
func (s *Artifacts) GetLatestArtifact(ctx context.Context, request operations.GetLatestArtifactRequest) (*operations.GetLatestArtifactResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/artifacts/{artifactId}", request.PathParams)

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

	res := &operations.GetLatestArtifactResponse{
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

// ListArtifacts - List all artifact IDs
// Returns a list of IDs of all artifacts in the registry as a flat list.  Typically the
// server is configured to limit the number of artifact IDs returned when a large number
// of artifacts exist. In this case, the result of this call may be non-deterministic. The
// default limit is typically 1000 artifacts.
func (s *Artifacts) ListArtifacts(ctx context.Context) (*operations.ListArtifactsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/artifacts"

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

	res := &operations.ListArtifactsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListArtifacts200ApplicationJSONStrings = out
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

// SearchArtifacts - Search for artifacts
// Returns a paginated list of all artifacts that match the provided search criteria.
func (s *Artifacts) SearchArtifacts(ctx context.Context, request operations.SearchArtifactsRequest) (*operations.SearchArtifactsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/search/artifacts"

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

	res := &operations.SearchArtifactsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ArtifactSearchResults
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ArtifactSearchResults = out
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

// UpdateArtifact - Update artifact
// Updates an artifact by uploading new content.  The body of the request should
// be the raw content of the artifact.  This is typically in JSON format for *most*
// of the supported types, but may be in another format for a few (for example, `PROTOBUF`).
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
// Alternatively, you can specify the artifact type using the `X-Registry-ArtifactType`
// HTTP request header, or include a hint in the request's `Content-Type`.  For example:
//
// ```
// Content-Type: application/json; artifactType=AVRO
// ```
//
// The update could fail for a number of reasons including:
//
// * Provided content (request body) was empty (HTTP error `400`)
// * No artifact with the `artifactId` exists (HTTP error `404`)
// * The new content violates one of the rules configured for the artifact (HTTP error `409`)
// * The provided artifact type is not recognized (HTTP error `404`)
// * A server error occurred (HTTP error `500`)
//
// When successful, this creates a new version of the artifact, making it the most recent
// (and therefore official) version of the artifact.
func (s *Artifacts) UpdateArtifact(ctx context.Context, request operations.UpdateArtifactRequest) (*operations.UpdateArtifactResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/artifacts/{artifactId}", request.PathParams)

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

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateArtifactResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ArtifactMetaData
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ArtifactMetaData = out
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

// UpdateArtifactState - Update artifact state
// Updates the state of the artifact.  For example, you can use this to mark the latest
// version of an artifact as `DEPRECATED`.  The operation changes the state of the latest
// version of the artifact.  If multiple versions exist, only the most recent is changed.
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
// * Artifact cannot transition to the given state (HTTP error `400`)
// * A server error occurred (HTTP error `500`)
func (s *Artifacts) UpdateArtifactState(ctx context.Context, request operations.UpdateArtifactStateRequest) (*operations.UpdateArtifactStateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/artifacts/{artifactId}/state", request.PathParams)

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

	res := &operations.UpdateArtifactStateResponse{
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
