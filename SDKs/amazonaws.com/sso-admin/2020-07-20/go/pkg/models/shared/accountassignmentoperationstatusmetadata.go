package shared

import (
"time")

type AccountAssignmentOperationStatusMetadata struct {
    CreatedDate *time.Time `json:"CreatedDate,omitempty"`
    RequestID *string `json:"RequestId,omitempty"`
    Status *StatusValuesEnum `json:"Status,omitempty"`
    
}

