package operations

import (
"openapi/pkg/models/shared")

type GetAPIKeysIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetAPIKeysIDRequest struct {
    PathParams GetAPIKeysIDPathParams 
    
}

type GetAPIKeysIDResponse struct {
    APIKeyEntity *shared.APIKeyEntity 
    ContentType string 
    StatusCode int64 
    
}

