package shared

type PagedListingRecommendationCollection struct {
	Href                   *string                 `json:"href"`
	Limit                  *int32                  `json:"limit"`
	ListingRecommendations []ListingRecommendation `json:"listingRecommendations"`
	Next                   *string                 `json:"next"`
	Offset                 *int32                  `json:"offset"`
	Prev                   *string                 `json:"prev"`
	Total                  *int32                  `json:"total"`
}
