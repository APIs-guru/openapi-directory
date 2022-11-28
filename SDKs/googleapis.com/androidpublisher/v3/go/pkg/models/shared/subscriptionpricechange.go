package shared

// SubscriptionPriceChange
// Contains the price change information for a subscription that can be used to control the user journey for the price change in the app. This can be in the form of seeking confirmation from the user or tailoring the experience for a successful conversion.
type SubscriptionPriceChange struct {
	NewPrice *Price `json:"newPrice,omitempty"`
	State    *int32 `json:"state,omitempty"`
}
