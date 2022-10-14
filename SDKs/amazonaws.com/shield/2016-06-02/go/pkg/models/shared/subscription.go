package shared

import (
	"time"
)

type Subscription struct {
	AutoRenew                 *AutoRenewEnum                 `json:"AutoRenew,omitempty"`
	EndTime                   *time.Time                     `json:"EndTime,omitempty"`
	Limits                    []Limit                        `json:"Limits,omitempty"`
	ProactiveEngagementStatus *ProactiveEngagementStatusEnum `json:"ProactiveEngagementStatus,omitempty"`
	StartTime                 *time.Time                     `json:"StartTime,omitempty"`
	SubscriptionArn           *string                        `json:"SubscriptionArn,omitempty"`
	SubscriptionLimits        SubscriptionLimits             `json:"SubscriptionLimits"`
	TimeCommitmentInSeconds   *int64                         `json:"TimeCommitmentInSeconds,omitempty"`
}
