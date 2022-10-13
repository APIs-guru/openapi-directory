package shared

type NonGuaranteedAuctionTerms struct {
	AutoOptimizePrivateAuction *bool           `json:"autoOptimizePrivateAuction"`
	ReservePricesPerBuyer      []PricePerBuyer `json:"reservePricesPerBuyer"`
}
