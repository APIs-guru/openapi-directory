package shared

import (
"time")

type ReplicationStatusType struct {
    KmsKeyID *string `json:"KmsKeyId,omitempty"`
    LastAccessedDate *time.Time `json:"LastAccessedDate,omitempty"`
    Region *string `json:"Region,omitempty"`
    Status *StatusTypeEnum `json:"Status,omitempty"`
    StatusMessage *string `json:"StatusMessage,omitempty"`
    
}

