package operations

import (
"openapi/pkg/models/shared")

type PostGroupUsersRequestBody struct {
    Admin *bool `multipartForm:"name=admin"`
    GroupID int32 `multipartForm:"name=group_id"`
    UserID int32 `multipartForm:"name=user_id"`
    
}

type PostGroupUsersRequest struct {
    Request PostGroupUsersRequestBody `request:"mediaType=multipart/form-data"`
    
}

type PostGroupUsersResponse struct {
    ContentType string 
    GroupUserEntity *shared.GroupUserEntity 
    StatusCode int64 
    
}

