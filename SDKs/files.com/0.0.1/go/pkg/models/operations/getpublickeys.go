package operations

import (
"openapi/pkg/models/shared")

type GetPublicKeysQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    UserID *int32 `queryParam:"style=form,explode=true,name=user_id"`
    
}

type GetPublicKeysRequest struct {
    QueryParams GetPublicKeysQueryParams 
    
}

type GetPublicKeysResponse struct {
    ContentType string 
    PublicKeyEntities []shared.PublicKeyEntity 
    StatusCode int64 
    
}

