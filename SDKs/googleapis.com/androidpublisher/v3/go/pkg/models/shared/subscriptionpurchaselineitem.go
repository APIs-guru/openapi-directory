package shared

type SubscriptionPurchaseLineItem struct {
	AutoRenewingPlan *AutoRenewingPlan `json:"autoRenewingPlan"`
	ExpiryTime       *string           `json:"expiryTime"`
	PrepaidPlan      *PrepaidPlan      `json:"prepaidPlan"`
	ProductID        *string           `json:"productId"`
}
