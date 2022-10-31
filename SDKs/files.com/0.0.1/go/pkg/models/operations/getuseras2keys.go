package operations

import (
"openapi/pkg/models/shared")

type GetUserAs2KeysQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    UserID *int32 `queryParam:"style=form,explode=true,name=user_id"`
    
}

type GetUserAs2KeysRequest struct {
    QueryParams GetUserAs2KeysQueryParams 
    
}

type GetUserAs2KeysResponse struct {
    As2KeyEntities []shared.As2KeyEntity 
    ContentType string 
    StatusCode int64 
    
}

