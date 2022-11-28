package shared

import (
	"time"
)

// DomainDeliverabilityTrackingOption
// An object that contains information about the Deliverability dashboard subscription for a verified domain that you use to send email and currently has an active Deliverability dashboard subscription. If a Deliverability dashboard subscription is active for a domain, you gain access to reputation, inbox placement, and other metrics for the domain.
type DomainDeliverabilityTrackingOption struct {
	Domain                       *string                       `json:"Domain,omitempty"`
	InboxPlacementTrackingOption *InboxPlacementTrackingOption `json:"InboxPlacementTrackingOption,omitempty"`
	SubscriptionStartDate        *time.Time                    `json:"SubscriptionStartDate,omitempty"`
}
