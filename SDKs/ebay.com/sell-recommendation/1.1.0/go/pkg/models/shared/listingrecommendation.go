package shared



type ListingRecommendation struct {
    ListingID *string `json:"listingId,omitempty"`
    Marketing *MarketingRecommendation `json:"marketing,omitempty"`
    
}

