package shared

import (
	"time"
)

type PermissionSetProvisioningStatusMetadata struct {
	CreatedDate *time.Time        `json:"CreatedDate"`
	RequestID   *string           `json:"RequestId"`
	Status      *StatusValuesEnum `json:"Status"`
}
