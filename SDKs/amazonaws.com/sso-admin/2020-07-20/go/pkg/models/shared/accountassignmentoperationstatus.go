package shared

import (
	"time"
)

type AccountAssignmentOperationStatus struct {
	CreatedDate      *time.Time         `json:"CreatedDate"`
	FailureReason    *string            `json:"FailureReason"`
	PermissionSetArn *string            `json:"PermissionSetArn"`
	PrincipalID      *string            `json:"PrincipalId"`
	PrincipalType    *PrincipalTypeEnum `json:"PrincipalType"`
	RequestID        *string            `json:"RequestId"`
	Status           *StatusValuesEnum  `json:"Status"`
	TargetID         *string            `json:"TargetId"`
	TargetType       *TargetTypeEnum    `json:"TargetType"`
}
