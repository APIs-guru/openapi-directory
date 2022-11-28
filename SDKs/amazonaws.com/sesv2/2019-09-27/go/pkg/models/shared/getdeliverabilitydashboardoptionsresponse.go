package shared

import (
	"time"
)

// GetDeliverabilityDashboardOptionsResponse
// An object that shows the status of the Deliverability dashboard.
type GetDeliverabilityDashboardOptionsResponse struct {
	AccountStatus                      *DeliverabilityDashboardAccountStatusEnum `json:"AccountStatus,omitempty"`
	ActiveSubscribedDomains            []DomainDeliverabilityTrackingOption      `json:"ActiveSubscribedDomains,omitempty"`
	DashboardEnabled                   bool                                      `json:"DashboardEnabled"`
	PendingExpirationSubscribedDomains []DomainDeliverabilityTrackingOption      `json:"PendingExpirationSubscribedDomains,omitempty"`
	SubscriptionExpiryDate             *time.Time                                `json:"SubscriptionExpiryDate,omitempty"`
}
