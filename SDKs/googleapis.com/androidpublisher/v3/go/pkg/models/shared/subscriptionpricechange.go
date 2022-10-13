package shared

type SubscriptionPriceChange struct {
	NewPrice *Price `json:"newPrice"`
	State    *int32 `json:"state"`
}
