package operations

import (
"openapi/pkg/models/shared")

type GetUserCipherUsesQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    UserID *int32 `queryParam:"style=form,explode=true,name=user_id"`
    
}

type GetUserCipherUsesRequest struct {
    QueryParams GetUserCipherUsesQueryParams 
    
}

type GetUserCipherUsesResponse struct {
    ContentType string 
    StatusCode int64 
    UserCipherUseEntities []shared.UserCipherUseEntity 
    
}

