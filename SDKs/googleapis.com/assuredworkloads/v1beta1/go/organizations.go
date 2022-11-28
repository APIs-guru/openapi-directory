package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

type Organizations struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewOrganizations(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Organizations {
	return &Organizations{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// AssuredworkloadsOrganizationsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
func (s *Organizations) AssuredworkloadsOrganizationsLocationsOperationsList(ctx context.Context, request operations.AssuredworkloadsOrganizationsLocationsOperationsListRequest) (*operations.AssuredworkloadsOrganizationsLocationsOperationsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{name}/operations", request.PathParams)

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

	res := &operations.AssuredworkloadsOrganizationsLocationsOperationsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningListOperationsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningListOperationsResponse = out
		}
	}

	return res, nil
}

// AssuredworkloadsOrganizationsLocationsWorkloadsCreate - Creates Assured Workload.
func (s *Organizations) AssuredworkloadsOrganizationsLocationsWorkloadsCreate(ctx context.Context, request operations.AssuredworkloadsOrganizationsLocationsWorkloadsCreateRequest) (*operations.AssuredworkloadsOrganizationsLocationsWorkloadsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{parent}/workloads", request.PathParams)

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

	res := &operations.AssuredworkloadsOrganizationsLocationsWorkloadsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// AssuredworkloadsOrganizationsLocationsWorkloadsDelete - Deletes the workload. Make sure that workload's direct children are already in a deleted state, otherwise the request will fail with a FAILED_PRECONDITION error. In addition to assuredworkloads.workload.delete permission, the user should also have orgpolicy.policy.set permission on the deleted folder to remove Assured Workloads OrgPolicies.
func (s *Organizations) AssuredworkloadsOrganizationsLocationsWorkloadsDelete(ctx context.Context, request operations.AssuredworkloadsOrganizationsLocationsWorkloadsDeleteRequest) (*operations.AssuredworkloadsOrganizationsLocationsWorkloadsDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
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

	res := &operations.AssuredworkloadsOrganizationsLocationsWorkloadsDeleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleProtobufEmpty = out
		}
	}

	return res, nil
}

// AssuredworkloadsOrganizationsLocationsWorkloadsList - Lists Assured Workloads under a CRM Node.
func (s *Organizations) AssuredworkloadsOrganizationsLocationsWorkloadsList(ctx context.Context, request operations.AssuredworkloadsOrganizationsLocationsWorkloadsListRequest) (*operations.AssuredworkloadsOrganizationsLocationsWorkloadsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{parent}/workloads", request.PathParams)

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

	res := &operations.AssuredworkloadsOrganizationsLocationsWorkloadsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse = out
		}
	}

	return res, nil
}

// AssuredworkloadsOrganizationsLocationsWorkloadsOrganizationsLocationsWorkloadsAnalyzeWorkloadMove - Analyzes a hypothetical move of a source project or project-based workload to a target (destination) folder-based workload.
func (s *Organizations) AssuredworkloadsOrganizationsLocationsWorkloadsOrganizationsLocationsWorkloadsAnalyzeWorkloadMove(ctx context.Context, request operations.AssuredworkloadsOrganizationsLocationsWorkloadsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveRequest) (*operations.AssuredworkloadsOrganizationsLocationsWorkloadsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{source}/{target}:analyzeWorkloadMove", request.PathParams)

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

	res := &operations.AssuredworkloadsOrganizationsLocationsWorkloadsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse = out
		}
	}

	return res, nil
}

// AssuredworkloadsOrganizationsLocationsWorkloadsPatch - Updates an existing workload. Currently allows updating of workload display_name and labels. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.
func (s *Organizations) AssuredworkloadsOrganizationsLocationsWorkloadsPatch(ctx context.Context, request operations.AssuredworkloadsOrganizationsLocationsWorkloadsPatchRequest) (*operations.AssuredworkloadsOrganizationsLocationsWorkloadsPatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{name}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
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

	res := &operations.AssuredworkloadsOrganizationsLocationsWorkloadsPatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudAssuredworkloadsV1beta1Workload
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudAssuredworkloadsV1beta1Workload = out
		}
	}

	return res, nil
}

// AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResources - Restrict the list of resources allowed in the Workload environment. The current list of allowed products can be found at https://cloud.google.com/assured-workloads/docs/supported-products In addition to assuredworkloads.workload.update permission, the user should also have orgpolicy.policy.set permission on the folder resource to use this functionality.
func (s *Organizations) AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResources(ctx context.Context, request operations.AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesRequest) (*operations.AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{name}:restrictAllowedResources", request.PathParams)

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

	res := &operations.AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesResponse = out
		}
	}

	return res, nil
}

// AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledge - Acknowledges an existing violation. By acknowledging a violation, users acknowledge the existence of a compliance violation in their workload and decide to ignore it due to a valid business justification. Acknowledgement is a permanent operation and it cannot be reverted.
func (s *Organizations) AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledge(ctx context.Context, request operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeRequest) (*operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{name}:acknowledge", request.PathParams)

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

	res := &operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationResponse = out
		}
	}

	return res, nil
}

// AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGet - Retrieves Assured Workload Violation based on ID.
func (s *Organizations) AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGet(ctx context.Context, request operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetRequest) (*operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{name}", request.PathParams)

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

	res := &operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudAssuredworkloadsV1beta1Violation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudAssuredworkloadsV1beta1Violation = out
		}
	}

	return res, nil
}

// AssuredworkloadsOrganizationsLocationsWorkloadsViolationsList - Lists the Violations in the AssuredWorkload Environment. Callers may also choose to read across multiple Workloads as per [AIP-159](https://google.aip.dev/159) by using '-' (the hyphen or dash character) as a wildcard character instead of workload-id in the parent. Format `organizations/{org_id}/locations/{location}/workloads/-`
func (s *Organizations) AssuredworkloadsOrganizationsLocationsWorkloadsViolationsList(ctx context.Context, request operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListRequest) (*operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{parent}/violations", request.PathParams)

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

	res := &operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse = out
		}
	}

	return res, nil
}
