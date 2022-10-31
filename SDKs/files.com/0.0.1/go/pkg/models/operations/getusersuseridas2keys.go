package operations

import (
"openapi/pkg/models/shared")

type GetUsersUserIDAs2KeysPathParams struct {
    UserID int32 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type GetUsersUserIDAs2KeysQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type GetUsersUserIDAs2KeysRequest struct {
    PathParams GetUsersUserIDAs2KeysPathParams 
    QueryParams GetUsersUserIDAs2KeysQueryParams 
    
}

type GetUsersUserIDAs2KeysResponse struct {
    As2KeyEntities []shared.As2KeyEntity 
    ContentType string 
    StatusCode int64 
    
}

