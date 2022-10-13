package shared

type DealTermsNonGuaranteedAuctionTerms struct {
	AutoOptimizePrivateAuction *bool           `json:"autoOptimizePrivateAuction"`
	ReservePricePerBuyers      []PricePerBuyer `json:"reservePricePerBuyers"`
}
