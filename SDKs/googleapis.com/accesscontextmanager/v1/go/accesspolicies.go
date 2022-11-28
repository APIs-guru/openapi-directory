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

type AccessPolicies struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewAccessPolicies(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *AccessPolicies {
	return &AccessPolicies{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// AccesscontextmanagerAccessPoliciesAccessLevelsCreate - Creates an access level. The long-running operation from this RPC has a successful status after the access level propagates to long-lasting storage. If access levels contain errors, an error response is returned for the first error encountered.
func (s *AccessPolicies) AccesscontextmanagerAccessPoliciesAccessLevelsCreate(ctx context.Context, request operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest) (*operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/accessLevels", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Operation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Operation = out
		}
	}

	return res, nil
}

// AccesscontextmanagerAccessPoliciesAccessLevelsList - Lists all access levels for an access policy.
func (s *AccessPolicies) AccesscontextmanagerAccessPoliciesAccessLevelsList(ctx context.Context, request operations.AccesscontextmanagerAccessPoliciesAccessLevelsListRequest) (*operations.AccesscontextmanagerAccessPoliciesAccessLevelsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/accessLevels", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AccesscontextmanagerAccessPoliciesAccessLevelsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListAccessLevelsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListAccessLevelsResponse = out
		}
	}

	return res, nil
}

// AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAll - Replaces all existing access levels in an access policy with the access levels provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. If the replacement contains errors, an error response is returned for the first error encountered. Upon error, the replacement is cancelled, and existing access levels are not affected. The Operation.response field contains ReplaceAccessLevelsResponse. Removing access levels contained in existing service perimeters result in an error.
func (s *AccessPolicies) AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAll(ctx context.Context, request operations.AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllRequest) (*operations.AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/accessLevels:replaceAll", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Operation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Operation = out
		}
	}

	return res, nil
}

// AccesscontextmanagerAccessPoliciesCreate - Creates an access policy. This method fails if the organization already has an access policy. The long-running operation has a successful status after the access policy propagates to long-lasting storage. Syntactic and basic semantic errors are returned in `metadata` as a BadRequest proto.
func (s *AccessPolicies) AccesscontextmanagerAccessPoliciesCreate(ctx context.Context, request operations.AccesscontextmanagerAccessPoliciesCreateRequest) (*operations.AccesscontextmanagerAccessPoliciesCreateResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/accessPolicies"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AccesscontextmanagerAccessPoliciesCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Operation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Operation = out
		}
	}

	return res, nil
}

// AccesscontextmanagerAccessPoliciesGetIamPolicy - Gets the IAM policy for the specified Access Context Manager access policy.
func (s *AccessPolicies) AccesscontextmanagerAccessPoliciesGetIamPolicy(ctx context.Context, request operations.AccesscontextmanagerAccessPoliciesGetIamPolicyRequest) (*operations.AccesscontextmanagerAccessPoliciesGetIamPolicyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{resource}:getIamPolicy", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AccesscontextmanagerAccessPoliciesGetIamPolicyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Policy
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Policy = out
		}
	}

	return res, nil
}

// AccesscontextmanagerAccessPoliciesList - Lists all access policies in an organization.
func (s *AccessPolicies) AccesscontextmanagerAccessPoliciesList(ctx context.Context, request operations.AccesscontextmanagerAccessPoliciesListRequest) (*operations.AccesscontextmanagerAccessPoliciesListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/accessPolicies"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AccesscontextmanagerAccessPoliciesListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListAccessPoliciesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListAccessPoliciesResponse = out
		}
	}

	return res, nil
}

// AccesscontextmanagerAccessPoliciesServicePerimetersCommit - Commits the dry-run specification for all the service perimeters in an access policy. A commit operation on a service perimeter involves copying its `spec` field to the `status` field of the service perimeter. Only service perimeters with `use_explicit_dry_run_spec` field set to true are affected by a commit operation. The long-running operation from this RPC has a successful status after the dry-run specifications for all the service perimeters have been committed. If a commit fails, it causes the long-running operation to return an error response and the entire commit operation is cancelled. When successful, the Operation.response field contains CommitServicePerimetersResponse. The `dry_run` and the `spec` fields are cleared after a successful commit operation.
func (s *AccessPolicies) AccesscontextmanagerAccessPoliciesServicePerimetersCommit(ctx context.Context, request operations.AccesscontextmanagerAccessPoliciesServicePerimetersCommitRequest) (*operations.AccesscontextmanagerAccessPoliciesServicePerimetersCommitResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/servicePerimeters:commit", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AccesscontextmanagerAccessPoliciesServicePerimetersCommitResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Operation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Operation = out
		}
	}

	return res, nil
}

// AccesscontextmanagerAccessPoliciesServicePerimetersCreate - Creates a service perimeter. The long-running operation from this RPC has a successful status after the service perimeter propagates to long-lasting storage. If a service perimeter contains errors, an error response is returned for the first error encountered.
func (s *AccessPolicies) AccesscontextmanagerAccessPoliciesServicePerimetersCreate(ctx context.Context, request operations.AccesscontextmanagerAccessPoliciesServicePerimetersCreateRequest) (*operations.AccesscontextmanagerAccessPoliciesServicePerimetersCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/servicePerimeters", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AccesscontextmanagerAccessPoliciesServicePerimetersCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Operation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Operation = out
		}
	}

	return res, nil
}

// AccesscontextmanagerAccessPoliciesServicePerimetersList - Lists all service perimeters for an access policy.
func (s *AccessPolicies) AccesscontextmanagerAccessPoliciesServicePerimetersList(ctx context.Context, request operations.AccesscontextmanagerAccessPoliciesServicePerimetersListRequest) (*operations.AccesscontextmanagerAccessPoliciesServicePerimetersListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/servicePerimeters", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AccesscontextmanagerAccessPoliciesServicePerimetersListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListServicePerimetersResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListServicePerimetersResponse = out
		}
	}

	return res, nil
}

// AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAll - Replace all existing service perimeters in an access policy with the service perimeters provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. Replacements containing errors result in an error response for the first error encountered. Upon an error, replacement are cancelled and existing service perimeters are not affected. The Operation.response field contains ReplaceServicePerimetersResponse.
func (s *AccessPolicies) AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAll(ctx context.Context, request operations.AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllRequest) (*operations.AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/servicePerimeters:replaceAll", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Operation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Operation = out
		}
	}

	return res, nil
}

// AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissions - Returns the IAM permissions that the caller has on the specified Access Context Manager resource. The resource can be an AccessPolicy, AccessLevel, or ServicePerimeter. This method does not support other resources.
func (s *AccessPolicies) AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissions(ctx context.Context, request operations.AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsRequest) (*operations.AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{resource}:testIamPermissions", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.TestIamPermissionsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TestIamPermissionsResponse = out
		}
	}

	return res, nil
}

// AccesscontextmanagerAccessPoliciesSetIamPolicy - Sets the IAM policy for the specified Access Context Manager access policy. This method replaces the existing IAM policy on the access policy. The IAM policy controls the set of users who can perform specific operations on the Access Context Manager access policy.
func (s *AccessPolicies) AccesscontextmanagerAccessPoliciesSetIamPolicy(ctx context.Context, request operations.AccesscontextmanagerAccessPoliciesSetIamPolicyRequest) (*operations.AccesscontextmanagerAccessPoliciesSetIamPolicyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{resource}:setIamPolicy", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AccesscontextmanagerAccessPoliciesSetIamPolicyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Policy
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Policy = out
		}
	}

	return res, nil
}
