package shared

// ConvertedOtherRegionsPrice
// Converted other regions prices.
type ConvertedOtherRegionsPrice struct {
	EurPrice *Money `json:"eurPrice,omitempty"`
	UsdPrice *Money `json:"usdPrice,omitempty"`
}
