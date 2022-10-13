package shared

type SubscriptionOfferPhase struct {
	Duration           *string                                   `json:"duration"`
	OtherRegionsConfig *OtherRegionsSubscriptionOfferPhaseConfig `json:"otherRegionsConfig"`
	RecurrenceCount    *int32                                    `json:"recurrenceCount"`
	RegionalConfigs    []RegionalSubscriptionOfferPhaseConfig    `json:"regionalConfigs"`
}
