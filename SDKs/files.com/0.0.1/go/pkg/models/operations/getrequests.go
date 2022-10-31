package operations

import (
"openapi/pkg/models/shared")

type GetRequestsQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    Mine *bool `queryParam:"style=form,explode=true,name=mine"`
    Path *string `queryParam:"style=form,explode=true,name=path"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    SortBy map[string]interface{} `queryParam:"style=form,explode=true,name=sort_by"`
    
}

type GetRequestsRequest struct {
    QueryParams GetRequestsQueryParams 
    
}

type GetRequestsResponse struct {
    ContentType string 
    RequestEntities []shared.RequestEntity 
    StatusCode int64 
    
}

