package shared



type OtherRegionsSubscriptionOfferPhaseConfig struct {
    AbsoluteDiscounts *OtherRegionsSubscriptionOfferPhasePrices `json:"absoluteDiscounts,omitempty"`
    OtherRegionsPrices *OtherRegionsSubscriptionOfferPhasePrices `json:"otherRegionsPrices,omitempty"`
    RelativeDiscount *float64 `json:"relativeDiscount,omitempty"`
    
}

