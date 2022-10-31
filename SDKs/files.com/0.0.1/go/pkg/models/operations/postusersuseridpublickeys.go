package operations

import (
"openapi/pkg/models/shared")

type PostUsersUserIDPublicKeysPathParams struct {
    UserID int32 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type PostUsersUserIDPublicKeysRequestBody struct {
    PublicKey string `multipartForm:"name=public_key"`
    Title string `multipartForm:"name=title"`
    
}

type PostUsersUserIDPublicKeysRequest struct {
    PathParams PostUsersUserIDPublicKeysPathParams 
    Request PostUsersUserIDPublicKeysRequestBody `request:"mediaType=multipart/form-data"`
    
}

type PostUsersUserIDPublicKeysResponse struct {
    ContentType string 
    PublicKeyEntity *shared.PublicKeyEntity 
    StatusCode int64 
    
}

