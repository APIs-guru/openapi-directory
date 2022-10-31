package shared

import (
"time")

type ContextSummary struct {
    ContextArn *string `json:"ContextArn,omitempty"`
    ContextName *string `json:"ContextName,omitempty"`
    ContextType *string `json:"ContextType,omitempty"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    LastModifiedTime *time.Time `json:"LastModifiedTime,omitempty"`
    Source *ContextSource `json:"Source,omitempty"`
    
}

