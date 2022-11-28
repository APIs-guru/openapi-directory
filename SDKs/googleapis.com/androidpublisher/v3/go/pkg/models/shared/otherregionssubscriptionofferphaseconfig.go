package shared

// OtherRegionsSubscriptionOfferPhaseConfig
// Configuration for any new locations Play may launch in for a single offer phase.
type OtherRegionsSubscriptionOfferPhaseConfig struct {
	AbsoluteDiscounts  *OtherRegionsSubscriptionOfferPhasePrices `json:"absoluteDiscounts,omitempty"`
	OtherRegionsPrices *OtherRegionsSubscriptionOfferPhasePrices `json:"otherRegionsPrices,omitempty"`
	RelativeDiscount   *float64                                  `json:"relativeDiscount,omitempty"`
}
