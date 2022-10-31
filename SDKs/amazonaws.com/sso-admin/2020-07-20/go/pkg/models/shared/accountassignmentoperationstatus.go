package shared

import (
"time")

type AccountAssignmentOperationStatus struct {
    CreatedDate *time.Time `json:"CreatedDate,omitempty"`
    FailureReason *string `json:"FailureReason,omitempty"`
    PermissionSetArn *string `json:"PermissionSetArn,omitempty"`
    PrincipalID *string `json:"PrincipalId,omitempty"`
    PrincipalType *PrincipalTypeEnum `json:"PrincipalType,omitempty"`
    RequestID *string `json:"RequestId,omitempty"`
    Status *StatusValuesEnum `json:"Status,omitempty"`
    TargetID *string `json:"TargetId,omitempty"`
    TargetType *TargetTypeEnum `json:"TargetType,omitempty"`
    
}

