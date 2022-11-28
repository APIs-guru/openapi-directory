package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

type ProvisioningJobs struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewProvisioningJobs(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *ProvisioningJobs {
	return &ProvisioningJobs{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetProvisioningjobsJobID - Detail of a provisioning job
// Provisioning failures may occur. Contact support in the event of a failure or wait for error resolution.<br />
// Do NOT retry provisioning until the job reports finished or cancelled.
func (s *ProvisioningJobs) GetProvisioningjobsJobID(ctx context.Context, request operations.GetProvisioningjobsJobIDRequest) (*operations.GetProvisioningjobsJobIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/provisioningjobs/{jobId}", request.PathParams)

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

	res := &operations.GetProvisioningjobsJobIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ProvisioningJobInfo
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProvisioningJobInfo = out
		}
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ProvisioningJobCompletion
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProvisioningJobCompletion = out
		}
	}

	return res, nil
}
