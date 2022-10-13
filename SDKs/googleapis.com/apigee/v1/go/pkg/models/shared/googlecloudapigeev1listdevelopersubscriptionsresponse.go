package shared

type GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse struct {
	DeveloperSubscriptions []GoogleCloudApigeeV1DeveloperSubscription `json:"developerSubscriptions"`
	NextStartKey           *string                                    `json:"nextStartKey"`
}
