package operations

import (
"time"
"openapi/pkg/models/shared")


type PostUserAPIKeysRequestBodyPermissionSetEnum string

const (
    PostUserAPIKeysRequestBodyPermissionSetEnumNone PostUserAPIKeysRequestBodyPermissionSetEnum = "none"
PostUserAPIKeysRequestBodyPermissionSetEnumFull PostUserAPIKeysRequestBodyPermissionSetEnum = "full"
PostUserAPIKeysRequestBodyPermissionSetEnumDesktopApp PostUserAPIKeysRequestBodyPermissionSetEnum = "desktop_app"
PostUserAPIKeysRequestBodyPermissionSetEnumSyncApp PostUserAPIKeysRequestBodyPermissionSetEnum = "sync_app"
PostUserAPIKeysRequestBodyPermissionSetEnumOfficeIntegration PostUserAPIKeysRequestBodyPermissionSetEnum = "office_integration"
PostUserAPIKeysRequestBodyPermissionSetEnumMobileApp PostUserAPIKeysRequestBodyPermissionSetEnum = "mobile_app"
)


type PostUserAPIKeysRequestBody struct {
    ExpiresAt *time.Time `multipartForm:"name=expires_at"`
    Name *string `multipartForm:"name=name"`
    Path *string `multipartForm:"name=path"`
    PermissionSet *PostUserAPIKeysRequestBodyPermissionSetEnum `multipartForm:"name=permission_set"`
    UserID *int32 `multipartForm:"name=user_id"`
    
}

type PostUserAPIKeysRequest struct {
    Request *PostUserAPIKeysRequestBody `request:"mediaType=multipart/form-data"`
    
}

type PostUserAPIKeysResponse struct {
    APIKeyEntity *shared.APIKeyEntity 
    ContentType string 
    StatusCode int64 
    
}

