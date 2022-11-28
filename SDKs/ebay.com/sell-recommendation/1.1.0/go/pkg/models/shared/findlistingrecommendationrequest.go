package shared

// FindListingRecommendationRequest
// An list of listing ID values for which you want Promoted Listings ad configuration information.
type FindListingRecommendationRequest struct {
	ListingIds []string `json:"listingIds,omitempty"`
}
