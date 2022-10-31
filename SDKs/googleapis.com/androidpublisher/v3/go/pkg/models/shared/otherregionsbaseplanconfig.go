package shared



type OtherRegionsBasePlanConfig struct {
    EurPrice *Money `json:"eurPrice,omitempty"`
    NewSubscriberAvailability *bool `json:"newSubscriberAvailability,omitempty"`
    UsdPrice *Money `json:"usdPrice,omitempty"`
    
}

