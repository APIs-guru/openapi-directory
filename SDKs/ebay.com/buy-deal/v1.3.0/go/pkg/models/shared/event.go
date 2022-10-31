package shared



type Event struct {
    ApplicableCoupons []Coupon `json:"applicableCoupons,omitempty"`
    Description *string `json:"description,omitempty"`
    EndDate *string `json:"endDate,omitempty"`
    EventAffiliateWebURL *string `json:"eventAffiliateWebUrl,omitempty"`
    EventID *string `json:"eventId,omitempty"`
    EventWebURL *string `json:"eventWebUrl,omitempty"`
    Images []Image `json:"images,omitempty"`
    StartDate *string `json:"startDate,omitempty"`
    Terms *Terms `json:"terms,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

