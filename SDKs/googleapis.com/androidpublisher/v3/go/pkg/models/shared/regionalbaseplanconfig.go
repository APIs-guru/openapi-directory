package shared

type RegionalBasePlanConfig struct {
	NewSubscriberAvailability *bool   `json:"newSubscriberAvailability"`
	Price                     *Money  `json:"price"`
	RegionCode                *string `json:"regionCode"`
}
