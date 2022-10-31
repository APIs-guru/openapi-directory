package operations

import (
"openapi/pkg/models/shared")

type GetSchedulesScheduleAByStateQueryParams struct {
    APIKey string `queryParam:"style=form,explode=true,name=api_key"`
    CommitteeID []string `queryParam:"style=form,explode=true,name=committee_id"`
    Cycle []int32 `queryParam:"style=form,explode=true,name=cycle"`
    HideNull *bool `queryParam:"style=form,explode=true,name=hide_null"`
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    SortHideNull *bool `queryParam:"style=form,explode=true,name=sort_hide_null"`
    SortNullOnly *bool `queryParam:"style=form,explode=true,name=sort_null_only"`
    SortNullsLast *bool `queryParam:"style=form,explode=true,name=sort_nulls_last"`
    State []string `queryParam:"style=form,explode=true,name=state"`
    
}

type GetSchedulesScheduleAByStateRequest struct {
    QueryParams GetSchedulesScheduleAByStateQueryParams 
    
}

type GetSchedulesScheduleAByStateResponse struct {
    ContentType string 
    ScheduleAByStatePage *shared.ScheduleAByStatePage 
    StatusCode int64 
    
}

