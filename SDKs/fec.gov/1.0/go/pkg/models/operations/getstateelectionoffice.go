package operations

import (
"openapi/pkg/models/shared")

type GetStateElectionOfficeQueryParams struct {
    APIKey string `queryParam:"style=form,explode=true,name=api_key"`
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    SortHideNull *bool `queryParam:"style=form,explode=true,name=sort_hide_null"`
    SortNullOnly *bool `queryParam:"style=form,explode=true,name=sort_null_only"`
    SortNullsLast *bool `queryParam:"style=form,explode=true,name=sort_nulls_last"`
    State string `queryParam:"style=form,explode=true,name=state"`
    
}

type GetStateElectionOfficeRequest struct {
    QueryParams GetStateElectionOfficeQueryParams 
    
}

type GetStateElectionOfficeResponse struct {
    ContentType string 
    StateElectionOfficeInfoPage *shared.StateElectionOfficeInfoPage 
    StatusCode int64 
    
}

