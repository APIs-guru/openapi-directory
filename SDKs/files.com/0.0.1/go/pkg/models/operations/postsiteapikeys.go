package operations

import (
"time"
"openapi/pkg/models/shared")


type PostSiteAPIKeysRequestBodyPermissionSetEnum string

const (
    PostSiteAPIKeysRequestBodyPermissionSetEnumNone PostSiteAPIKeysRequestBodyPermissionSetEnum = "none"
PostSiteAPIKeysRequestBodyPermissionSetEnumFull PostSiteAPIKeysRequestBodyPermissionSetEnum = "full"
PostSiteAPIKeysRequestBodyPermissionSetEnumDesktopApp PostSiteAPIKeysRequestBodyPermissionSetEnum = "desktop_app"
PostSiteAPIKeysRequestBodyPermissionSetEnumSyncApp PostSiteAPIKeysRequestBodyPermissionSetEnum = "sync_app"
PostSiteAPIKeysRequestBodyPermissionSetEnumOfficeIntegration PostSiteAPIKeysRequestBodyPermissionSetEnum = "office_integration"
PostSiteAPIKeysRequestBodyPermissionSetEnumMobileApp PostSiteAPIKeysRequestBodyPermissionSetEnum = "mobile_app"
)


type PostSiteAPIKeysRequestBody struct {
    ExpiresAt *time.Time `multipartForm:"name=expires_at"`
    Name *string `multipartForm:"name=name"`
    Path *string `multipartForm:"name=path"`
    PermissionSet *PostSiteAPIKeysRequestBodyPermissionSetEnum `multipartForm:"name=permission_set"`
    UserID *int32 `multipartForm:"name=user_id"`
    
}

type PostSiteAPIKeysRequest struct {
    Request *PostSiteAPIKeysRequestBody `request:"mediaType=multipart/form-data"`
    
}

type PostSiteAPIKeysResponse struct {
    APIKeyEntity *shared.APIKeyEntity 
    ContentType string 
    StatusCode int64 
    
}

