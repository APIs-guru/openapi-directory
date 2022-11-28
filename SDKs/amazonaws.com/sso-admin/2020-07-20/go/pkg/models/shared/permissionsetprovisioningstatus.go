package shared

import (
	"time"
)

// PermissionSetProvisioningStatus
// A structure that is used to provide the status of the provisioning operation for a specified permission set.
type PermissionSetProvisioningStatus struct {
	AccountID        *string           `json:"AccountId,omitempty"`
	CreatedDate      *time.Time        `json:"CreatedDate,omitempty"`
	FailureReason    *string           `json:"FailureReason,omitempty"`
	PermissionSetArn *string           `json:"PermissionSetArn,omitempty"`
	RequestID        *string           `json:"RequestId,omitempty"`
	Status           *StatusValuesEnum `json:"Status,omitempty"`
}
