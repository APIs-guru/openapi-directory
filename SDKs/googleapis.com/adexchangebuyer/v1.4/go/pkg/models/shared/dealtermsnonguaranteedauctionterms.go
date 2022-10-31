package shared

type DealTermsNonGuaranteedAuctionTerms struct {
	AutoOptimizePrivateAuction *bool           `json:"autoOptimizePrivateAuction,omitempty"`
	ReservePricePerBuyers      []PricePerBuyer `json:"reservePricePerBuyers,omitempty"`
}
