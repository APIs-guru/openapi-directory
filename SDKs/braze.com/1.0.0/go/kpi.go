package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type Kpi struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewKpi(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Kpi {
	return &Kpi{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DailyActiveUsersByDate - Daily Active Users by Date
// This endpoint allows you to retrieve a daily series of the total number of unique active users on each date.
//
// ## Response
//
// ```json
// Content-Type: application/json
// Authorization: Bearer YOUR-REST-API-KEY
//
//	{
//	    "message": (required, string) the status of the export, returns 'success' when completed without errors,
//	    "data" : [
//	        {
//	            "time" : (string) date as ISO 8601 date,
//	            "dau" : (int)
//	        },
//	        ...
//	    ]
//	}
//
// ```
func (s *Kpi) DailyActiveUsersByDate(ctx context.Context, request operations.DailyActiveUsersByDateRequest) (*operations.DailyActiveUsersByDateResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/kpi/dau/data_series"

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

	res := &operations.DailyActiveUsersByDateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// DailyNewUsersByDate - Daily New Users by Date
// This endpoint allows you to retrieve a daily series of the total number of new users on each date.
//
// ## Response
//
// ```json
// Content-Type: application/json
// Authorization: Bearer YOUR-REST-API-KEY
//
//	{
//	    "message": (required, string) the status of the export, returns 'success' when completed without errors,
//	    "data" : [
//	        {
//	            "time" : (string) date as ISO 8601 date,
//	            "new_users" : (int)
//	        },
//	        ...
//	    ]
//	}
//
// ```
func (s *Kpi) DailyNewUsersByDate(ctx context.Context, request operations.DailyNewUsersByDateRequest) (*operations.DailyNewUsersByDateResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/kpi/new_users/data_series"

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

	res := &operations.DailyNewUsersByDateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// KpIsForDailyAppUninstallsByDate - KPIs for Daily App Uninstalls by Date
// This endpoint allows you to retrieve a daily series of the total number of uninstalls on each date.
//
// ## Response
//
// ```json
// Content-Type: application/json
// Authorization: Bearer YOUR-REST-API-KEY
//
//	{
//	    "message": (required, string) the status of the export, returns 'success' when completed without errors,
//	    "data" : [
//	        {
//	            "time" : (string) date as ISO 8601 date,
//	            "uninstalls" : (int)
//	        },
//	        ...
//	    ]
//	}
//
// ```
func (s *Kpi) KpIsForDailyAppUninstallsByDate(ctx context.Context, request operations.KpIsForDailyAppUninstallsByDateRequest) (*operations.KpIsForDailyAppUninstallsByDateResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/kpi/uninstalls/data_series"

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

	res := &operations.KpIsForDailyAppUninstallsByDateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// MonthlyActiveUsersForLast30Days - Monthly Active Users for Last 30 Days
// This endpoint allows you to retrieve a daily series of the total number of unique active users over a 30-day rolling window.
//
// ## Response
//
// ```json
// Content-Type: application/json
// Authorization: Bearer YOUR-REST-API-KEY
//
//	{
//	    "message": (required, string) the status of the export, returns 'success' when completed without errors,
//	    "data" : [
//	        {
//	            "time" : (string) date as ISO 8601 date,
//	            "mau" : (int)
//	        },
//	        ...
//	    ]
//	}
//
// ```
func (s *Kpi) MonthlyActiveUsersForLast30Days(ctx context.Context, request operations.MonthlyActiveUsersForLast30DaysRequest) (*operations.MonthlyActiveUsersForLast30DaysResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/kpi/mau/data_series"

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

	res := &operations.MonthlyActiveUsersForLast30DaysResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
