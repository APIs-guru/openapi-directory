package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetReportingDatesQueryParams struct {
	APIKey        string     `queryParam:"style=form,explode=true,name=api_key"`
	MaxCreateDate *time.Time `queryParam:"style=form,explode=true,name=max_create_date"`
	MaxDueDate    *time.Time `queryParam:"style=form,explode=true,name=max_due_date"`
	MaxUpdateDate *time.Time `queryParam:"style=form,explode=true,name=max_update_date"`
	MinCreateDate *time.Time `queryParam:"style=form,explode=true,name=min_create_date"`
	MinDueDate    *time.Time `queryParam:"style=form,explode=true,name=min_due_date"`
	MinUpdateDate *time.Time `queryParam:"style=form,explode=true,name=min_update_date"`
	Page          *int32     `queryParam:"style=form,explode=true,name=page"`
	PerPage       *int32     `queryParam:"style=form,explode=true,name=per_page"`
	ReportType    []string   `queryParam:"style=form,explode=true,name=report_type"`
	ReportYear    []int32    `queryParam:"style=form,explode=true,name=report_year"`
	Sort          *string    `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull  *bool      `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly  *bool      `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast *bool      `queryParam:"style=form,explode=true,name=sort_nulls_last"`
}

type GetReportingDatesRequest struct {
	QueryParams GetReportingDatesQueryParams
}

type GetReportingDatesDefaultApplicationJSON struct {
	Pagination *shared.OffsetInfo  `json:"pagination"`
	Results    []shared.ReportDate `json:"results"`
}

type GetReportingDatesResponse struct {
	ContentType                                   string
	GetReportingDatesDefaultApplicationJSONObject *GetReportingDatesDefaultApplicationJSON
	StatusCode                                    int64
}
