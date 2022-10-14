package shared

type SubscriptionPriceChange struct {
	NewPrice *Price `json:"newPrice,omitempty"`
	State    *int32 `json:"state,omitempty"`
}
