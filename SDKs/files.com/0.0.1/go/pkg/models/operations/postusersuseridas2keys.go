package operations

import (
"openapi/pkg/models/shared")

type PostUsersUserIDAs2KeysPathParams struct {
    UserID int32 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type PostUsersUserIDAs2KeysRequestBody struct {
    As2PartnershipName string `multipartForm:"name=as2_partnership_name"`
    PublicKey string `multipartForm:"name=public_key"`
    
}

type PostUsersUserIDAs2KeysRequest struct {
    PathParams PostUsersUserIDAs2KeysPathParams 
    Request PostUsersUserIDAs2KeysRequestBody `request:"mediaType=multipart/form-data"`
    
}

type PostUsersUserIDAs2KeysResponse struct {
    As2KeyEntity *shared.As2KeyEntity 
    ContentType string 
    StatusCode int64 
    
}

