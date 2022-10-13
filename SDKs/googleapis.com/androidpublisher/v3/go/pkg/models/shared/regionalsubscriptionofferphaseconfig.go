package shared

type RegionalSubscriptionOfferPhaseConfig struct {
	AbsoluteDiscount *Money   `json:"absoluteDiscount"`
	Price            *Money   `json:"price"`
	RegionCode       *string  `json:"regionCode"`
	RelativeDiscount *float64 `json:"relativeDiscount"`
}
