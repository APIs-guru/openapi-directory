package shared



type CreateOffersRequest struct {
    AllowCounterOffer *bool `json:"allowCounterOffer,omitempty"`
    Message *string `json:"message,omitempty"`
    OfferDuration *TimeDuration `json:"offerDuration,omitempty"`
    OfferedItems []OfferedItem `json:"offeredItems,omitempty"`
    
}

