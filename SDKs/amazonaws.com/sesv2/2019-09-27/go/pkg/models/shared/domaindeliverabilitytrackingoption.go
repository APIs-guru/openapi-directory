package shared

import (
	"time"
)

type DomainDeliverabilityTrackingOption struct {
	Domain                       *string                       `json:"Domain"`
	InboxPlacementTrackingOption *InboxPlacementTrackingOption `json:"InboxPlacementTrackingOption"`
	SubscriptionStartDate        *time.Time                    `json:"SubscriptionStartDate"`
}
