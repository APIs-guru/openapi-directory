package shared

// SubscriptionPurchaseLineItem
// Item-level info for a subscription purchase.
type SubscriptionPurchaseLineItem struct {
	AutoRenewingPlan *AutoRenewingPlan `json:"autoRenewingPlan,omitempty"`
	ExpiryTime       *string           `json:"expiryTime,omitempty"`
	OfferDetails     *OfferDetails     `json:"offerDetails,omitempty"`
	PrepaidPlan      *PrepaidPlan      `json:"prepaidPlan,omitempty"`
	ProductID        *string           `json:"productId,omitempty"`
}
