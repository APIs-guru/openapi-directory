package shared

import (
"time")

type DomainDeliverabilityTrackingOption struct {
    Domain *string `json:"Domain,omitempty"`
    InboxPlacementTrackingOption *InboxPlacementTrackingOption `json:"InboxPlacementTrackingOption,omitempty"`
    SubscriptionStartDate *time.Time `json:"SubscriptionStartDate,omitempty"`
    
}

