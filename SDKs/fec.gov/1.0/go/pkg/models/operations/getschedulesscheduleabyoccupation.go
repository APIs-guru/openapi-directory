package operations

import (
"openapi/pkg/models/shared")

type GetSchedulesScheduleAByOccupationQueryParams struct {
    APIKey string `queryParam:"style=form,explode=true,name=api_key"`
    CommitteeID []string `queryParam:"style=form,explode=true,name=committee_id"`
    Cycle []int32 `queryParam:"style=form,explode=true,name=cycle"`
    Occupation []string `queryParam:"style=form,explode=true,name=occupation"`
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    SortHideNull *bool `queryParam:"style=form,explode=true,name=sort_hide_null"`
    SortNullOnly *bool `queryParam:"style=form,explode=true,name=sort_null_only"`
    SortNullsLast *bool `queryParam:"style=form,explode=true,name=sort_nulls_last"`
    
}

type GetSchedulesScheduleAByOccupationRequest struct {
    QueryParams GetSchedulesScheduleAByOccupationQueryParams 
    
}

type GetSchedulesScheduleAByOccupationResponse struct {
    ContentType string 
    ScheduleAByOccupationPage *shared.ScheduleAByOccupationPage 
    StatusCode int64 
    
}

