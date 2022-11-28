package shared

// PagedListingRecommendationCollection
// The high-level object used to return a set of Promoted Listings ad recommendations.
type PagedListingRecommendationCollection struct {
	Href                   *string                 `json:"href,omitempty"`
	Limit                  *int32                  `json:"limit,omitempty"`
	ListingRecommendations []ListingRecommendation `json:"listingRecommendations,omitempty"`
	Next                   *string                 `json:"next,omitempty"`
	Offset                 *int32                  `json:"offset,omitempty"`
	Prev                   *string                 `json:"prev,omitempty"`
	Total                  *int32                  `json:"total,omitempty"`
}
