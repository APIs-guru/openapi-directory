package shared

import (
"time")


type APIKeyEntityPermissionSetEnum string

const (
    APIKeyEntityPermissionSetEnumNone APIKeyEntityPermissionSetEnum = "none"
APIKeyEntityPermissionSetEnumFull APIKeyEntityPermissionSetEnum = "full"
APIKeyEntityPermissionSetEnumDesktopApp APIKeyEntityPermissionSetEnum = "desktop_app"
APIKeyEntityPermissionSetEnumSyncApp APIKeyEntityPermissionSetEnum = "sync_app"
APIKeyEntityPermissionSetEnumOfficeIntegration APIKeyEntityPermissionSetEnum = "office_integration"
APIKeyEntityPermissionSetEnumMobileApp APIKeyEntityPermissionSetEnum = "mobile_app"
)


type APIKeyEntity struct {
    CreatedAt *time.Time `json:"created_at,omitempty"`
    DescriptiveLabel *string `json:"descriptive_label,omitempty"`
    ExpiresAt *time.Time `json:"expires_at,omitempty"`
    ID *int32 `json:"id,omitempty"`
    Key *string `json:"key,omitempty"`
    LastUseAt *time.Time `json:"last_use_at,omitempty"`
    Name *string `json:"name,omitempty"`
    Path *string `json:"path,omitempty"`
    PermissionSet *APIKeyEntityPermissionSetEnum `json:"permission_set,omitempty"`
    Platform *string `json:"platform,omitempty"`
    UserID *int32 `json:"user_id,omitempty"`
    
}

