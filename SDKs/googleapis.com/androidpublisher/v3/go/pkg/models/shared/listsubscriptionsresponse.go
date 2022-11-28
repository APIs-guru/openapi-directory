package shared

// ListSubscriptionsResponse
// Response message for ListSubscriptions.
type ListSubscriptionsResponse struct {
	NextPageToken *string        `json:"nextPageToken,omitempty"`
	Subscriptions []Subscription `json:"subscriptions,omitempty"`
}
