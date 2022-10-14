package shared

type RegionalSubscriptionOfferConfig struct {
	NewSubscriberAvailability *bool   `json:"newSubscriberAvailability,omitempty"`
	RegionCode                *string `json:"regionCode,omitempty"`
}
