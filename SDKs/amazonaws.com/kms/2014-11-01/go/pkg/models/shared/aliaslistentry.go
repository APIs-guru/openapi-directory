package shared

import (
"time")

type AliasListEntry struct {
    AliasArn *string `json:"AliasArn,omitempty"`
    AliasName *string `json:"AliasName,omitempty"`
    CreationDate *time.Time `json:"CreationDate,omitempty"`
    LastUpdatedDate *time.Time `json:"LastUpdatedDate,omitempty"`
    TargetKeyID *string `json:"TargetKeyId,omitempty"`
    
}

