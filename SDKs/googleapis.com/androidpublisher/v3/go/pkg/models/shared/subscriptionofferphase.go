package shared

// SubscriptionOfferPhase
// A single phase of a subscription offer.
type SubscriptionOfferPhase struct {
	Duration           *string                                   `json:"duration,omitempty"`
	OtherRegionsConfig *OtherRegionsSubscriptionOfferPhaseConfig `json:"otherRegionsConfig,omitempty"`
	RecurrenceCount    *int32                                    `json:"recurrenceCount,omitempty"`
	RegionalConfigs    []RegionalSubscriptionOfferPhaseConfig    `json:"regionalConfigs,omitempty"`
}
