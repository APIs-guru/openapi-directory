package shared

// GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaListSubscriptionsResponse
// Response message for BeyondCorp.ListSubscriptions.
type GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaListSubscriptionsResponse struct {
	NextPageToken *string                                                             `json:"nextPageToken,omitempty"`
	Subscriptions []GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription `json:"subscriptions,omitempty"`
}
