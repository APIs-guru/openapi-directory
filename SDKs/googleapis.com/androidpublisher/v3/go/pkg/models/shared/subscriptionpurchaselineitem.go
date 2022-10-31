package shared

type SubscriptionPurchaseLineItem struct {
	AutoRenewingPlan *AutoRenewingPlan `json:"autoRenewingPlan,omitempty"`
	ExpiryTime       *string           `json:"expiryTime,omitempty"`
	PrepaidPlan      *PrepaidPlan      `json:"prepaidPlan,omitempty"`
	ProductID        *string           `json:"productId,omitempty"`
}
