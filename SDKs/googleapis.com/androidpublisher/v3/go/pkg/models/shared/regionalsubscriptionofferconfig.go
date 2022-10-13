package shared

type RegionalSubscriptionOfferConfig struct {
	NewSubscriberAvailability *bool   `json:"newSubscriberAvailability"`
	RegionCode                *string `json:"regionCode"`
}
