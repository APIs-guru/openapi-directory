package shared

type ListSubscriptionOffersResponse struct {
	NextPageToken      *string             `json:"nextPageToken"`
	SubscriptionOffers []SubscriptionOffer `json:"subscriptionOffers"`
}
