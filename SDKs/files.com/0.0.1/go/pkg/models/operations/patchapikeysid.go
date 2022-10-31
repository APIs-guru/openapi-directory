package operations

import (
"time"
"openapi/pkg/models/shared")

type PatchAPIKeysIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}


type PatchAPIKeysIDRequestBodyPermissionSetEnum string

const (
    PatchAPIKeysIDRequestBodyPermissionSetEnumNone PatchAPIKeysIDRequestBodyPermissionSetEnum = "none"
PatchAPIKeysIDRequestBodyPermissionSetEnumFull PatchAPIKeysIDRequestBodyPermissionSetEnum = "full"
PatchAPIKeysIDRequestBodyPermissionSetEnumDesktopApp PatchAPIKeysIDRequestBodyPermissionSetEnum = "desktop_app"
PatchAPIKeysIDRequestBodyPermissionSetEnumSyncApp PatchAPIKeysIDRequestBodyPermissionSetEnum = "sync_app"
PatchAPIKeysIDRequestBodyPermissionSetEnumOfficeIntegration PatchAPIKeysIDRequestBodyPermissionSetEnum = "office_integration"
PatchAPIKeysIDRequestBodyPermissionSetEnumMobileApp PatchAPIKeysIDRequestBodyPermissionSetEnum = "mobile_app"
)


type PatchAPIKeysIDRequestBody struct {
    ExpiresAt *time.Time `multipartForm:"name=expires_at"`
    Name *string `multipartForm:"name=name"`
    PermissionSet *PatchAPIKeysIDRequestBodyPermissionSetEnum `multipartForm:"name=permission_set"`
    
}

type PatchAPIKeysIDRequest struct {
    PathParams PatchAPIKeysIDPathParams 
    Request *PatchAPIKeysIDRequestBody `request:"mediaType=multipart/form-data"`
    
}

type PatchAPIKeysIDResponse struct {
    APIKeyEntity *shared.APIKeyEntity 
    ContentType string 
    StatusCode int64 
    
}

