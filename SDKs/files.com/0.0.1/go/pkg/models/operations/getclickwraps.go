package operations

import (
"openapi/pkg/models/shared")

type GetClickwrapsQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type GetClickwrapsRequest struct {
    QueryParams GetClickwrapsQueryParams 
    
}

type GetClickwrapsResponse struct {
    ClickwrapEntities []shared.ClickwrapEntity 
    ContentType string 
    StatusCode int64 
    
}

