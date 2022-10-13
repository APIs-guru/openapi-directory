package shared

type ListingRecommendation struct {
	ListingID *string                  `json:"listingId"`
	Marketing *MarketingRecommendation `json:"marketing"`
}
