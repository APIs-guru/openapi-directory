package operations

import (
"openapi/pkg/models/shared")

type PatchPublicKeysIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PatchPublicKeysIDRequestBody struct {
    Title string `multipartForm:"name=title"`
    
}

type PatchPublicKeysIDRequest struct {
    PathParams PatchPublicKeysIDPathParams 
    Request PatchPublicKeysIDRequestBody `request:"mediaType=multipart/form-data"`
    
}

type PatchPublicKeysIDResponse struct {
    ContentType string 
    PublicKeyEntity *shared.PublicKeyEntity 
    StatusCode int64 
    
}

