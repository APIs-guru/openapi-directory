package operations

import (
"openapi/pkg/models/shared")

type GetUsersUserIDPublicKeysPathParams struct {
    UserID int32 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type GetUsersUserIDPublicKeysQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type GetUsersUserIDPublicKeysRequest struct {
    PathParams GetUsersUserIDPublicKeysPathParams 
    QueryParams GetUsersUserIDPublicKeysQueryParams 
    
}

type GetUsersUserIDPublicKeysResponse struct {
    ContentType string 
    PublicKeyEntities []shared.PublicKeyEntity 
    StatusCode int64 
    
}

