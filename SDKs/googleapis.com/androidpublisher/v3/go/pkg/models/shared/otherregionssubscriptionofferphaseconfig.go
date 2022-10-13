package shared

type OtherRegionsSubscriptionOfferPhaseConfig struct {
	AbsoluteDiscounts  *OtherRegionsSubscriptionOfferPhasePrices `json:"absoluteDiscounts"`
	OtherRegionsPrices *OtherRegionsSubscriptionOfferPhasePrices `json:"otherRegionsPrices"`
	RelativeDiscount   *float64                                  `json:"relativeDiscount"`
}
