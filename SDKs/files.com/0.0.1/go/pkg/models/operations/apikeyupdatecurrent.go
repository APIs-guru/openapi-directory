package operations

import (
"time"
"openapi/pkg/models/shared")


type APIKeyUpdateCurrentRequestBodyPermissionSetEnum string

const (
    APIKeyUpdateCurrentRequestBodyPermissionSetEnumNone APIKeyUpdateCurrentRequestBodyPermissionSetEnum = "none"
APIKeyUpdateCurrentRequestBodyPermissionSetEnumFull APIKeyUpdateCurrentRequestBodyPermissionSetEnum = "full"
APIKeyUpdateCurrentRequestBodyPermissionSetEnumDesktopApp APIKeyUpdateCurrentRequestBodyPermissionSetEnum = "desktop_app"
APIKeyUpdateCurrentRequestBodyPermissionSetEnumSyncApp APIKeyUpdateCurrentRequestBodyPermissionSetEnum = "sync_app"
APIKeyUpdateCurrentRequestBodyPermissionSetEnumOfficeIntegration APIKeyUpdateCurrentRequestBodyPermissionSetEnum = "office_integration"
APIKeyUpdateCurrentRequestBodyPermissionSetEnumMobileApp APIKeyUpdateCurrentRequestBodyPermissionSetEnum = "mobile_app"
)


type APIKeyUpdateCurrentRequestBody struct {
    ExpiresAt *time.Time `multipartForm:"name=expires_at"`
    Name *string `multipartForm:"name=name"`
    PermissionSet *APIKeyUpdateCurrentRequestBodyPermissionSetEnum `multipartForm:"name=permission_set"`
    
}

type APIKeyUpdateCurrentRequest struct {
    Request *APIKeyUpdateCurrentRequestBody `request:"mediaType=multipart/form-data"`
    
}

type APIKeyUpdateCurrentResponse struct {
    APIKeyEntity *shared.APIKeyEntity 
    ContentType string 
    StatusCode int64 
    
}

