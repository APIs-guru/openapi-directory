package operations

import (
"openapi/pkg/models/shared")

type GetSchedulesScheduleBByRecipientIDQueryParams struct {
    APIKey string `queryParam:"style=form,explode=true,name=api_key"`
    CommitteeID []string `queryParam:"style=form,explode=true,name=committee_id"`
    Cycle []int32 `queryParam:"style=form,explode=true,name=cycle"`
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    RecipientID []string `queryParam:"style=form,explode=true,name=recipient_id"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    SortHideNull *bool `queryParam:"style=form,explode=true,name=sort_hide_null"`
    SortNullOnly *bool `queryParam:"style=form,explode=true,name=sort_null_only"`
    SortNullsLast *bool `queryParam:"style=form,explode=true,name=sort_nulls_last"`
    
}

type GetSchedulesScheduleBByRecipientIDRequest struct {
    QueryParams GetSchedulesScheduleBByRecipientIDQueryParams 
    
}

type GetSchedulesScheduleBByRecipientIDResponse struct {
    ContentType string 
    ScheduleBByRecipientIDPage *shared.ScheduleBByRecipientIDPage 
    StatusCode int64 
    
}

