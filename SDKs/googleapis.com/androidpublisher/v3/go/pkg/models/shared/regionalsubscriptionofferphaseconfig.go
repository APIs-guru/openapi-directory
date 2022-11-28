package shared

// RegionalSubscriptionOfferPhaseConfig
// Configuration for a single phase of a subscription offer in a single region.
type RegionalSubscriptionOfferPhaseConfig struct {
	AbsoluteDiscount *Money   `json:"absoluteDiscount,omitempty"`
	Price            *Money   `json:"price,omitempty"`
	RegionCode       *string  `json:"regionCode,omitempty"`
	RelativeDiscount *float64 `json:"relativeDiscount,omitempty"`
}
