package shared

type RegionalBasePlanConfig struct {
	NewSubscriberAvailability *bool   `json:"newSubscriberAvailability,omitempty"`
	Price                     *Money  `json:"price,omitempty"`
	RegionCode                *string `json:"regionCode,omitempty"`
}
