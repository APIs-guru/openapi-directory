package operations

import (
"openapi/pkg/models/shared")

type PatchAs2KeysIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PatchAs2KeysIDRequestBody struct {
    As2PartnershipName string `multipartForm:"name=as2_partnership_name"`
    
}

type PatchAs2KeysIDRequest struct {
    PathParams PatchAs2KeysIDPathParams 
    Request PatchAs2KeysIDRequestBody `request:"mediaType=multipart/form-data"`
    
}

type PatchAs2KeysIDResponse struct {
    As2KeyEntity *shared.As2KeyEntity 
    ContentType string 
    StatusCode int64 
    
}

