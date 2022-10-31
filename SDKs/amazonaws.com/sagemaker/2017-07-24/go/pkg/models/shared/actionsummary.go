package shared

import (
"time")

type ActionSummary struct {
    ActionArn *string `json:"ActionArn,omitempty"`
    ActionName *string `json:"ActionName,omitempty"`
    ActionType *string `json:"ActionType,omitempty"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    LastModifiedTime *time.Time `json:"LastModifiedTime,omitempty"`
    Source *ActionSource `json:"Source,omitempty"`
    Status *ActionStatusEnum `json:"Status,omitempty"`
    
}

