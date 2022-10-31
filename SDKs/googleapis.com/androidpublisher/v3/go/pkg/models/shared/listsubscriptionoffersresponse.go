package shared



type ListSubscriptionOffersResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    SubscriptionOffers []SubscriptionOffer `json:"subscriptionOffers,omitempty"`
    
}

