package shared

import (
	"time"
)

type EffectivePolicy struct {
	LastUpdatedTimestamp *time.Time               `json:"LastUpdatedTimestamp"`
	PolicyContent        *string                  `json:"PolicyContent"`
	PolicyType           *EffectivePolicyTypeEnum `json:"PolicyType"`
	TargetID             *string                  `json:"TargetId"`
}
