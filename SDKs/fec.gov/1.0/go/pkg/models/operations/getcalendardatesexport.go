package operations

import (
"time"
"openapi/pkg/models/shared")


type GetCalendarDatesExportRendererEnum string

const (
    GetCalendarDatesExportRendererEnumIcs GetCalendarDatesExportRendererEnum = "ics"
GetCalendarDatesExportRendererEnumCsv GetCalendarDatesExportRendererEnum = "csv"
)


type GetCalendarDatesExportQueryParams struct {
    APIKey string `queryParam:"style=form,explode=true,name=api_key"`
    CalendarCategoryID []int32 `queryParam:"style=form,explode=true,name=calendar_category_id"`
    Description []string `queryParam:"style=form,explode=true,name=description"`
    EventID *int32 `queryParam:"style=form,explode=true,name=event_id"`
    MaxEndDate *time.Time `queryParam:"style=form,explode=true,name=max_end_date"`
    MaxStartDate *time.Time `queryParam:"style=form,explode=true,name=max_start_date"`
    MinEndDate *time.Time `queryParam:"style=form,explode=true,name=min_end_date"`
    MinStartDate *time.Time `queryParam:"style=form,explode=true,name=min_start_date"`
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    Renderer *GetCalendarDatesExportRendererEnum `queryParam:"style=form,explode=true,name=renderer"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    SortHideNull *bool `queryParam:"style=form,explode=true,name=sort_hide_null"`
    SortNullOnly *bool `queryParam:"style=form,explode=true,name=sort_null_only"`
    SortNullsLast *bool `queryParam:"style=form,explode=true,name=sort_nulls_last"`
    Summary []string `queryParam:"style=form,explode=true,name=summary"`
    
}

type GetCalendarDatesExportRequest struct {
    QueryParams GetCalendarDatesExportQueryParams 
    
}

type GetCalendarDatesExportResponse struct {
    CalendarDatePage *shared.CalendarDatePage 
    ContentType string 
    StatusCode int64 
    
}

