package shared



type RegionalSubscriptionOfferPhaseConfig struct {
    AbsoluteDiscount *Money `json:"absoluteDiscount,omitempty"`
    Price *Money `json:"price,omitempty"`
    RegionCode *string `json:"regionCode,omitempty"`
    RelativeDiscount *float64 `json:"relativeDiscount,omitempty"`
    
}

