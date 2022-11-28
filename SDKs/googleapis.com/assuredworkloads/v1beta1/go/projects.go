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

// AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMove - Analyzes a hypothetical move of a source project or project-based workload to a target (destination) folder-based workload.
func (s *Projects) AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMove(ctx context.Context, request operations.AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveRequest) (*operations.AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{project}/{target}:analyzeWorkloadMove", request.PathParams)

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

	res := &operations.AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveResponse{
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
