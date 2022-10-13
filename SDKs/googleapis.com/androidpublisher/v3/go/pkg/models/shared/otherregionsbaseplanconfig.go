package shared

type OtherRegionsBasePlanConfig struct {
	EurPrice                  *Money `json:"eurPrice"`
	NewSubscriberAvailability *bool  `json:"newSubscriberAvailability"`
	UsdPrice                  *Money `json:"usdPrice"`
}
