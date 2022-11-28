package shared

// NonGuaranteedAuctionTerms
// Terms for Private Auctions. Note that Private Auctions can be created only by the seller, but they can be returned in a get or list request.
type NonGuaranteedAuctionTerms struct {
	AutoOptimizePrivateAuction *bool           `json:"autoOptimizePrivateAuction,omitempty"`
	ReservePricesPerBuyer      []PricePerBuyer `json:"reservePricesPerBuyer,omitempty"`
}
