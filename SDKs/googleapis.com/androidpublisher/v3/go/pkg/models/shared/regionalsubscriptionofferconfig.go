package shared

// RegionalSubscriptionOfferConfig
// Configuration for a subscription offer in a single region.
type RegionalSubscriptionOfferConfig struct {
	NewSubscriberAvailability *bool   `json:"newSubscriberAvailability,omitempty"`
	RegionCode                *string `json:"regionCode,omitempty"`
}
