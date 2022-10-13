package shared

import (
	"time"
)

type PermissionSetProvisioningStatus struct {
	AccountID        *string           `json:"AccountId"`
	CreatedDate      *time.Time        `json:"CreatedDate"`
	FailureReason    *string           `json:"FailureReason"`
	PermissionSetArn *string           `json:"PermissionSetArn"`
	RequestID        *string           `json:"RequestId"`
	Status           *StatusValuesEnum `json:"Status"`
}
