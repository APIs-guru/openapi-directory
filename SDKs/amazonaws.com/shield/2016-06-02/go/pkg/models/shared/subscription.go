package shared

import (
	"time"
)

type Subscription struct {
	AutoRenew                 *AutoRenewEnum                 `json:"AutoRenew"`
	EndTime                   *time.Time                     `json:"EndTime"`
	Limits                    []Limit                        `json:"Limits"`
	ProactiveEngagementStatus *ProactiveEngagementStatusEnum `json:"ProactiveEngagementStatus"`
	StartTime                 *time.Time                     `json:"StartTime"`
	SubscriptionArn           *string                        `json:"SubscriptionArn"`
	SubscriptionLimits        SubscriptionLimits             `json:"SubscriptionLimits"`
	TimeCommitmentInSeconds   *int64                         `json:"TimeCommitmentInSeconds"`
}
