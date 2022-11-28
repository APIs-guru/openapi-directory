package shared

// ListSubscriptionOffersResponse
// Response message for ListSubscriptionOffers.
type ListSubscriptionOffersResponse struct {
	NextPageToken      *string             `json:"nextPageToken,omitempty"`
	SubscriptionOffers []SubscriptionOffer `json:"subscriptionOffers,omitempty"`
}
