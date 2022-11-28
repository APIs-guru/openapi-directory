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

type Dates struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewDates(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Dates {
	return &Dates{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetCalendarDates -
// Combines the election and reporting dates with Commission meetings, conferences, outreach, Advisory Opinions, rules, litigation dates and other
// events into one calendar.
//
// State and report type filtering is no longer available.
func (s *Dates) GetCalendarDates(ctx context.Context, request operations.GetCalendarDatesRequest) (*operations.GetCalendarDatesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/calendar-dates/"

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

	res := &operations.GetCalendarDatesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CalendarDatePage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CalendarDatePage = out
		}
	}

	return res, nil
}

// GetCalendarDatesExport -
// Returns CSV or ICS for downloading directly into calendar applications like Google, Outlook or other applications.
//
// Combines the election and reporting dates with Commission meetings, conferences, outreach, Advisory Opinions, rules, litigation dates and other
// events into one calendar.
//
// State filtering now applies to elections, reports and reporting periods.
//
// Presidential pre-primary report due dates are not shown on even years.
// Filers generally opt to file monthly rather than submit over 50 pre-primary election
// reports. All reporting deadlines are available at /reporting-dates/ for reference.
//
// This is [the sql function](https://github.com/fecgov/openFEC/blob/develop/data/migrations/V40__omnibus_dates.sql)
// that creates the calendar.
func (s *Dates) GetCalendarDatesExport(ctx context.Context, request operations.GetCalendarDatesExportRequest) (*operations.GetCalendarDatesExportResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/calendar-dates/export/"

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

	res := &operations.GetCalendarDatesExportResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CalendarDatePage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CalendarDatePage = out
		}
	}

	return res, nil
}

// GetElectionDates -
// FEC election dates since 1995.
func (s *Dates) GetElectionDates(ctx context.Context, request operations.GetElectionDatesRequest) (*operations.GetElectionDatesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/election-dates/"

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

	res := &operations.GetElectionDatesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetElectionDatesDefaultApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetElectionDatesDefaultApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetReportingDates -
// FEC election dates since 1995.
func (s *Dates) GetReportingDates(ctx context.Context, request operations.GetReportingDatesRequest) (*operations.GetReportingDatesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/reporting-dates/"

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

	res := &operations.GetReportingDatesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetReportingDatesDefaultApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetReportingDatesDefaultApplicationJSONObject = out
		}
	}

	return res, nil
}
