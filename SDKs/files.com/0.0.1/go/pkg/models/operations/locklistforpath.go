package operations

import (
"openapi/pkg/models/shared")

type LockListForPathPathParams struct {
    Path string `pathParam:"style=simple,explode=false,name=path"`
    
}

type LockListForPathQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    IncludeChildren *bool `queryParam:"style=form,explode=true,name=include_children"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type LockListForPathRequest struct {
    PathParams LockListForPathPathParams 
    QueryParams LockListForPathQueryParams 
    
}

type LockListForPathResponse struct {
    ContentType string 
    LockEntities []shared.LockEntity 
    StatusCode int64 
    
}

