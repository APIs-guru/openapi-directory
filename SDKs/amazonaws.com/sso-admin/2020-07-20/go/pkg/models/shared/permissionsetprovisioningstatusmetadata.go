package shared

import (
	"time"
)

// PermissionSetProvisioningStatusMetadata
// Provides information about the permission set provisioning status.
type PermissionSetProvisioningStatusMetadata struct {
	CreatedDate *time.Time        `json:"CreatedDate,omitempty"`
	RequestID   *string           `json:"RequestId,omitempty"`
	Status      *StatusValuesEnum `json:"Status,omitempty"`
}
