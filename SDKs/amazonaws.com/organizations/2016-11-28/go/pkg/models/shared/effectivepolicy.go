package shared

import (
"time")

type EffectivePolicy struct {
    LastUpdatedTimestamp *time.Time `json:"LastUpdatedTimestamp,omitempty"`
    PolicyContent *string `json:"PolicyContent,omitempty"`
    PolicyType *EffectivePolicyTypeEnum `json:"PolicyType,omitempty"`
    TargetID *string `json:"TargetId,omitempty"`
    
}

