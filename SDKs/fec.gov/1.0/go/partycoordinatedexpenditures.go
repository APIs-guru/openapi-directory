package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type PartyCoordinatedExpenditures struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewPartyCoordinatedExpenditures(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *PartyCoordinatedExpenditures {
	return &PartyCoordinatedExpenditures{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetSchedulesScheduleF -
// Schedule F, it shows all special expenditures a national or state party committee
// makes in connection with the general election campaigns of federal candidates.
//
// These coordinated party expenditures do not count against the contribution limits but are subject to other limits,
// these limits are detailed in Chapter 7 of the FEC Campaign Guide for Political Party Committees.
func (s *PartyCoordinatedExpenditures) GetSchedulesScheduleF(ctx context.Context, request operations.GetSchedulesScheduleFRequest) (*operations.GetSchedulesScheduleFResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/schedules/schedule_f/"

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

	res := &operations.GetSchedulesScheduleFResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetSchedulesScheduleFDefaultApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetSchedulesScheduleFDefaultApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetSchedulesScheduleFSubID -
// Schedule F, it shows all special expenditures a national or state party committee
// makes in connection with the general election campaigns of federal candidates.
//
// These coordinated party expenditures do not count against the contribution limits but are subject to other limits,
// these limits are detailed in Chapter 7 of the FEC Campaign Guide for Political Party Committees.
func (s *PartyCoordinatedExpenditures) GetSchedulesScheduleFSubID(ctx context.Context, request operations.GetSchedulesScheduleFSubIDRequest) (*operations.GetSchedulesScheduleFSubIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/schedules/schedule_f/{sub_id}/", request.PathParams)

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

	res := &operations.GetSchedulesScheduleFSubIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetSchedulesScheduleFSubIDDefaultApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetSchedulesScheduleFSubIDDefaultApplicationJSONObject = out
		}
	}

	return res, nil
}
