package shared

// OtherRegionsSubscriptionOfferPhasePrices
// Pricing information for any new locations Play may launch in.
type OtherRegionsSubscriptionOfferPhasePrices struct {
	EurPrice *Money `json:"eurPrice,omitempty"`
	UsdPrice *Money `json:"usdPrice,omitempty"`
}
