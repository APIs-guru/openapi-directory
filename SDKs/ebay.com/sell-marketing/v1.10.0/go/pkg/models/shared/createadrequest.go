package shared

// CreateAdRequest
// This type defines the fields for the create ad request.
type CreateAdRequest struct {
	BidPercentage *string `json:"bidPercentage,omitempty"`
	ListingID     *string `json:"listingId,omitempty"`
}
