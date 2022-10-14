package shared

import (
	"time"
)

type GetDeliverabilityDashboardOptionsResponse struct {
	AccountStatus                      *DeliverabilityDashboardAccountStatusEnum `json:"AccountStatus,omitempty"`
	ActiveSubscribedDomains            []DomainDeliverabilityTrackingOption      `json:"ActiveSubscribedDomains,omitempty"`
	DashboardEnabled                   bool                                      `json:"DashboardEnabled"`
	PendingExpirationSubscribedDomains []DomainDeliverabilityTrackingOption      `json:"PendingExpirationSubscribedDomains,omitempty"`
	SubscriptionExpiryDate             *time.Time                                `json:"SubscriptionExpiryDate,omitempty"`
}
