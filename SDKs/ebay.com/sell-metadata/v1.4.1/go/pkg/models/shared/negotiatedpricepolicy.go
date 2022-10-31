package shared



type NegotiatedPricePolicy struct {
    BestOfferAutoAcceptEnabled *bool `json:"bestOfferAutoAcceptEnabled,omitempty"`
    BestOfferAutoDeclineEnabled *bool `json:"bestOfferAutoDeclineEnabled,omitempty"`
    BestOfferCounterEnabled *bool `json:"bestOfferCounterEnabled,omitempty"`
    CategoryID *string `json:"categoryId,omitempty"`
    CategoryTreeID *string `json:"categoryTreeId,omitempty"`
    
}

