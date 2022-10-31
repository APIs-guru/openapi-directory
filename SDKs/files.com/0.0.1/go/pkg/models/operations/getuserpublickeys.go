package operations

import (
"openapi/pkg/models/shared")

type GetUserPublicKeysQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    UserID *int32 `queryParam:"style=form,explode=true,name=user_id"`
    
}

type GetUserPublicKeysRequest struct {
    QueryParams GetUserPublicKeysQueryParams 
    
}

type GetUserPublicKeysResponse struct {
    ContentType string 
    PublicKeyEntities []shared.PublicKeyEntity 
    StatusCode int64 
    
}

