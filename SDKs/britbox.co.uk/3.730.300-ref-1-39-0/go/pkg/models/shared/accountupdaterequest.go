package shared



type AccountUpdateRequest struct {
    Address *Address `json:"address,omitempty"`
    DefaultPaymentInstrumentID *string `json:"defaultPaymentInstrumentId,omitempty"`
    DefaultPaymentMethodID *string `json:"defaultPaymentMethodId,omitempty"`
    FirstName *string `json:"firstName,omitempty"`
    LastName *string `json:"lastName,omitempty"`
    MinRatingPlaybackGuard *string `json:"minRatingPlaybackGuard,omitempty"`
    Segments []string `json:"segments,omitempty"`
    TrackingEnabled *bool `json:"trackingEnabled,omitempty"`
    
}

