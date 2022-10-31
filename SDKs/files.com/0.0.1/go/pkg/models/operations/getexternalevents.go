package operations

import (
"openapi/pkg/models/shared")

type GetExternalEventsQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    Filter map[string]interface{} `queryParam:"style=form,explode=true,name=filter"`
    FilterGt map[string]interface{} `queryParam:"style=form,explode=true,name=filter_gt"`
    FilterGteq map[string]interface{} `queryParam:"style=form,explode=true,name=filter_gteq"`
    FilterLike map[string]interface{} `queryParam:"style=form,explode=true,name=filter_like"`
    FilterLt map[string]interface{} `queryParam:"style=form,explode=true,name=filter_lt"`
    FilterLteq map[string]interface{} `queryParam:"style=form,explode=true,name=filter_lteq"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    SortBy map[string]interface{} `queryParam:"style=form,explode=true,name=sort_by"`
    
}

type GetExternalEventsRequest struct {
    QueryParams GetExternalEventsQueryParams 
    
}

type GetExternalEventsResponse struct {
    ContentType string 
    ExternalEventEntities []shared.ExternalEventEntity 
    StatusCode int64 
    
}

