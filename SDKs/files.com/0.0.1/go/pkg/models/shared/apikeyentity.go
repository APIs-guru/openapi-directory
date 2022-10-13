package shared

import (
	"time"
)

type APIKeyEntityPermissionSetEnum string

const (
	APIKeyEntityPermissionSetEnumNone              APIKeyEntityPermissionSetEnum = "none"
	APIKeyEntityPermissionSetEnumFull              APIKeyEntityPermissionSetEnum = "full"
	APIKeyEntityPermissionSetEnumDesktopApp        APIKeyEntityPermissionSetEnum = "desktop_app"
	APIKeyEntityPermissionSetEnumSyncApp           APIKeyEntityPermissionSetEnum = "sync_app"
	APIKeyEntityPermissionSetEnumOfficeIntegration APIKeyEntityPermissionSetEnum = "office_integration"
	APIKeyEntityPermissionSetEnumMobileApp         APIKeyEntityPermissionSetEnum = "mobile_app"
)

type APIKeyEntity struct {
	CreatedAt        *time.Time                     `json:"created_at"`
	DescriptiveLabel *string                        `json:"descriptive_label"`
	ExpiresAt        *time.Time                     `json:"expires_at"`
	ID               *int32                         `json:"id"`
	Key              *string                        `json:"key"`
	LastUseAt        *time.Time                     `json:"last_use_at"`
	Name             *string                        `json:"name"`
	Path             *string                        `json:"path"`
	PermissionSet    *APIKeyEntityPermissionSetEnum `json:"permission_set"`
	Platform         *string                        `json:"platform"`
	UserID           *int32                         `json:"user_id"`
}
