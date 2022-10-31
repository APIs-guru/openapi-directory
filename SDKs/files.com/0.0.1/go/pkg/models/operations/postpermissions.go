package operations

import (
"openapi/pkg/models/shared")

type PostPermissionsRequestBody struct {
    GroupID *int32 `multipartForm:"name=group_id"`
    Path *string `multipartForm:"name=path"`
    Permission *string `multipartForm:"name=permission"`
    Recursive *bool `multipartForm:"name=recursive"`
    UserID *int32 `multipartForm:"name=user_id"`
    Username *string `multipartForm:"name=username"`
    
}

type PostPermissionsRequest struct {
    Request *PostPermissionsRequestBody `request:"mediaType=multipart/form-data"`
    
}

type PostPermissionsResponse struct {
    ContentType string 
    PermissionEntity *shared.PermissionEntity 
    StatusCode int64 
    
}

