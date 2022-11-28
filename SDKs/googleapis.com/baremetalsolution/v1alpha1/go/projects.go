package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

type Projects struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewProjects(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Projects {
	return &Projects{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// BaremetalsolutionProjectsLocationsSubmitProvisioningConfig - Submit a provisiong configuration for a given project.
func (s *Projects) BaremetalsolutionProjectsLocationsSubmitProvisioningConfig(ctx context.Context, request operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigRequest) (*operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha1/{project}/{location}:submitProvisioningConfig", request.PathParams)

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

	res := &operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ProvisioningConfig
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProvisioningConfig = out
		}
	}

	return res, nil
}

// BaremetalsolutionProjectsProvisioningQuotasList - List the budget details to provision resources on a given project.
func (s *Projects) BaremetalsolutionProjectsProvisioningQuotasList(ctx context.Context, request operations.BaremetalsolutionProjectsProvisioningQuotasListRequest) (*operations.BaremetalsolutionProjectsProvisioningQuotasListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha1/{parent}/provisioningQuotas", request.PathParams)

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

	res := &operations.BaremetalsolutionProjectsProvisioningQuotasListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListProvisioningQuotasResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListProvisioningQuotasResponse = out
		}
	}

	return res, nil
}
