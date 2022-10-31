package operations

import (
"openapi/pkg/models/shared")

type GetPublicKeysIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetPublicKeysIDRequest struct {
    PathParams GetPublicKeysIDPathParams 
    
}

type GetPublicKeysIDResponse struct {
    ContentType string 
    PublicKeyEntity *shared.PublicKeyEntity 
    StatusCode int64 
    
}

