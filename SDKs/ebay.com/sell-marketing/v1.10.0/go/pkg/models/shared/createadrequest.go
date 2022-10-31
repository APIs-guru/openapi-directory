package shared

type CreateAdRequest struct {
	BidPercentage *string `json:"bidPercentage,omitempty"`
	ListingID     *string `json:"listingId,omitempty"`
}
