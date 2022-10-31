package shared

import (
	"time"
)

type PermissionSetProvisioningStatus struct {
	AccountID        *string           `json:"AccountId,omitempty"`
	CreatedDate      *time.Time        `json:"CreatedDate,omitempty"`
	FailureReason    *string           `json:"FailureReason,omitempty"`
	PermissionSetArn *string           `json:"PermissionSetArn,omitempty"`
	RequestID        *string           `json:"RequestId,omitempty"`
	Status           *StatusValuesEnum `json:"Status,omitempty"`
}
