package shared

// RegionalBasePlanConfig
// Configuration for a base plan specific to a region.
type RegionalBasePlanConfig struct {
	NewSubscriberAvailability *bool   `json:"newSubscriberAvailability,omitempty"`
	Price                     *Money  `json:"price,omitempty"`
	RegionCode                *string `json:"regionCode,omitempty"`
}
