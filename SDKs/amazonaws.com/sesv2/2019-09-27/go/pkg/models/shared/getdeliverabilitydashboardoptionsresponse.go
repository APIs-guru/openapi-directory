package shared

import (
	"time"
)

type GetDeliverabilityDashboardOptionsResponse struct {
	AccountStatus                      *DeliverabilityDashboardAccountStatusEnum `json:"AccountStatus"`
	ActiveSubscribedDomains            []DomainDeliverabilityTrackingOption      `json:"ActiveSubscribedDomains"`
	DashboardEnabled                   bool                                      `json:"DashboardEnabled"`
	PendingExpirationSubscribedDomains []DomainDeliverabilityTrackingOption      `json:"PendingExpirationSubscribedDomains"`
	SubscriptionExpiryDate             *time.Time                                `json:"SubscriptionExpiryDate"`
}
