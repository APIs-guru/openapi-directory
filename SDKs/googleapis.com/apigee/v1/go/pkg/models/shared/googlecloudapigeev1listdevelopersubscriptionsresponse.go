package shared

type GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse struct {
	DeveloperSubscriptions []GoogleCloudApigeeV1DeveloperSubscription `json:"developerSubscriptions,omitempty"`
	NextStartKey           *string                                    `json:"nextStartKey,omitempty"`
}
