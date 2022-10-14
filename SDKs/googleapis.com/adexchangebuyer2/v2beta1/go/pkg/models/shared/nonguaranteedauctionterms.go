package shared

type NonGuaranteedAuctionTerms struct {
	AutoOptimizePrivateAuction *bool           `json:"autoOptimizePrivateAuction,omitempty"`
	ReservePricesPerBuyer      []PricePerBuyer `json:"reservePricesPerBuyer,omitempty"`
}
