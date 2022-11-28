package shared

// OtherRegionsBasePlanConfig
// Pricing information for any new locations Play may launch in.
type OtherRegionsBasePlanConfig struct {
	EurPrice                  *Money `json:"eurPrice,omitempty"`
	NewSubscriberAvailability *bool  `json:"newSubscriberAvailability,omitempty"`
	UsdPrice                  *Money `json:"usdPrice,omitempty"`
}
