package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type Loans struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewLoans(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Loans {
	return &Loans{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetSchedulesScheduleC -
// Schedule C shows all loans, endorsements and loan guarantees a committee
// receives or makes.
//
// The committee continues to report the loan until it is repaid.
func (s *Loans) GetSchedulesScheduleC(ctx context.Context, request operations.GetSchedulesScheduleCRequest) (*operations.GetSchedulesScheduleCResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/schedules/schedule_c/"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSchedulesScheduleCResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetSchedulesScheduleCDefaultApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetSchedulesScheduleCDefaultApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetSchedulesScheduleCSubID -
// Schedule C shows all loans, endorsements and loan guarantees a committee
// receives or makes.
//
// The committee continues to report the loan until it is repaid.
func (s *Loans) GetSchedulesScheduleCSubID(ctx context.Context, request operations.GetSchedulesScheduleCSubIDRequest) (*operations.GetSchedulesScheduleCSubIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/schedules/schedule_c/{sub_id}/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSchedulesScheduleCSubIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetSchedulesScheduleCSubIDDefaultApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetSchedulesScheduleCSubIDDefaultApplicationJSONObject = out
		}
	}

	return res, nil
}
