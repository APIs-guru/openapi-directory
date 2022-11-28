package shared

// AutoRenewingPlan
// Information related to an auto renewing plan.
type AutoRenewingPlan struct {
	AutoRenewEnabled   *bool                               `json:"autoRenewEnabled,omitempty"`
	PriceChangeDetails *SubscriptionItemPriceChangeDetails `json:"priceChangeDetails,omitempty"`
}
