package shared

import (
	"time"
)

// EffectivePolicy
// Contains rules to be applied to the affected accounts. The effective policy is the aggregation of any policies the account inherits, plus any policy directly attached to the account.
type EffectivePolicy struct {
	LastUpdatedTimestamp *time.Time               `json:"LastUpdatedTimestamp,omitempty"`
	PolicyContent        *string                  `json:"PolicyContent,omitempty"`
	PolicyType           *EffectivePolicyTypeEnum `json:"PolicyType,omitempty"`
	TargetID             *string                  `json:"TargetId,omitempty"`
}
