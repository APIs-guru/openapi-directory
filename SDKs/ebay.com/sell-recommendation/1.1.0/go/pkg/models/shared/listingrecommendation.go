package shared

// ListingRecommendation
// A complex type that contains the ID of an actively listed item and a set of related listing recommendations. The recommendations contain information the seller can use to optimize their listing configurations.
type ListingRecommendation struct {
	ListingID *string                  `json:"listingId,omitempty"`
	Marketing *MarketingRecommendation `json:"marketing,omitempty"`
}
