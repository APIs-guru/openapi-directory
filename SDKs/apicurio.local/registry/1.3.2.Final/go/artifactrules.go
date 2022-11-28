package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

type ArtifactRules struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewArtifactRules(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *ArtifactRules {
	return &ArtifactRules{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CreateArtifactRule - Create artifact rule
// Adds a rule to the list of rules that get applied to the artifact when adding new
// versions.  All configured rules must pass to successfully add a new artifact version.
//
// This operation can fail for the following reasons:
//
// * No artifact with this `artifactId` exists (HTTP error `404`)
// * Rule (named in the request body) is unknown (HTTP error `400`)
// * A server error occurred (HTTP error `500`)
func (s *ArtifactRules) CreateArtifactRule(ctx context.Context, request operations.CreateArtifactRuleRequest) (*operations.CreateArtifactRuleResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/artifacts/{artifactId}/rules", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateArtifactRuleResponse{
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

// DeleteArtifactRule - Delete artifact rule
// Deletes a rule from the artifact.  This results in the rule no longer applying for
// this artifact.  If this is the only rule configured for the artifact, this is the
// same as deleting **all** rules, and the globally configured rules now apply to
// this artifact.
//
// This operation can fail for the following reasons:
//
// * No artifact with this `artifactId` exists (HTTP error `404`)
// * No rule with this name/type is configured for this artifact (HTTP error `404`)
// * Invalid rule type (HTTP error `400`)
// * A server error occurred (HTTP error `500`)
func (s *ArtifactRules) DeleteArtifactRule(ctx context.Context, request operations.DeleteArtifactRuleRequest) (*operations.DeleteArtifactRuleResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/artifacts/{artifactId}/rules/{rule}", request.PathParams)

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

	res := &operations.DeleteArtifactRuleResponse{
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

// DeleteArtifactRules - Delete artifact rules
// Deletes all of the rules configured for the artifact.  After this is done, the global
// rules apply to the artifact again.
//
// This operation can fail for the following reasons:
//
// * No artifact with this `artifactId` exists (HTTP error `404`)
// * A server error occurred (HTTP error `500`)
func (s *ArtifactRules) DeleteArtifactRules(ctx context.Context, request operations.DeleteArtifactRulesRequest) (*operations.DeleteArtifactRulesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/artifacts/{artifactId}/rules", request.PathParams)

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

	res := &operations.DeleteArtifactRulesResponse{
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

// GetArtifactRuleConfig - Get artifact rule configuration
// Returns information about a single rule configured for an artifact.  This is useful
// when you want to know what the current configuration settings are for a specific rule.
//
// This operation can fail for the following reasons:
//
// * No artifact with this `artifactId` exists (HTTP error `404`)
// * No rule with this name/type is configured for this artifact (HTTP error `404`)
// * Invalid rule type (HTTP error `400`)
// * A server error occurred (HTTP error `500`)
func (s *ArtifactRules) GetArtifactRuleConfig(ctx context.Context, request operations.GetArtifactRuleConfigRequest) (*operations.GetArtifactRuleConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/artifacts/{artifactId}/rules/{rule}", request.PathParams)

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

	res := &operations.GetArtifactRuleConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Rule
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Rule = out
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

// ListArtifactRules - List artifact rules
// Returns a list of all rules configured for the artifact.  The set of rules determines
// how the content of an artifact can evolve over time.  If no rules are configured for
// an artifact, the set of globally configured rules are used.  If no global rules
// are defined, there are no restrictions on content evolution.
//
// This operation can fail for the following reasons:
//
// * No artifact with this `artifactId` exists (HTTP error `404`)
// * A server error occurred (HTTP error `500`)
func (s *ArtifactRules) ListArtifactRules(ctx context.Context, request operations.ListArtifactRulesRequest) (*operations.ListArtifactRulesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/artifacts/{artifactId}/rules", request.PathParams)

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

	res := &operations.ListArtifactRulesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RuleTypeEnum
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RuleTypes = out
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

// TestUpdateArtifact - Test update artifact
// Tests whether an update to the artifact's content *would* succeed for the provided content.
// Ultimately, this applies any rules configured for the artifact against the given content
// to determine whether the rules would pass or fail, but without actually updating the artifact
// content.
//
// The body of the request should be the raw content of the artifact.  This is typically in
// JSON format for *most* of the supported types, but may be in another format for a few
// (for example, `PROTOBUF`).
//
// The registry attempts to figure out what kind of artifact is being added from the following  supported list:
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
// HTTP request header, or by including a hint in the request's `Content-Type`.  For example:
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
// When successful, this operation simply returns a *No Content* response.
func (s *ArtifactRules) TestUpdateArtifact(ctx context.Context, request operations.TestUpdateArtifactRequest) (*operations.TestUpdateArtifactResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/artifacts/{artifactId}/test", request.PathParams)

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

	res := &operations.TestUpdateArtifactResponse{
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

// UpdateArtifactRuleConfig - Update artifact rule configuration
// Updates the configuration of a single rule for the artifact.  The configuration data
// is specific to each rule type, so the configuration of the `COMPATIBILITY` rule
// is in a different format from the configuration of the `VALIDITY` rule.
//
// This operation can fail for the following reasons:
//
// * No artifact with this `artifactId` exists (HTTP error `404`)
// * No rule with this name/type is configured for this artifact (HTTP error `404`)
// * Invalid rule type (HTTP error `400`)
// * A server error occurred (HTTP error `500`)
func (s *ArtifactRules) UpdateArtifactRuleConfig(ctx context.Context, request operations.UpdateArtifactRuleConfigRequest) (*operations.UpdateArtifactRuleConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/artifacts/{artifactId}/rules/{rule}", request.PathParams)

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

	res := &operations.UpdateArtifactRuleConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Rule
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Rule = out
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
