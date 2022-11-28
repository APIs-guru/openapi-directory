package shared

// PricingSummary
// The type that defines the fields for the price details for an item.
type PricingSummary struct {
	AuctionReservePrice *Amount `json:"auctionReservePrice,omitempty"`
	AuctionStartPrice   *Amount `json:"auctionStartPrice,omitempty"`
	Price               *Amount `json:"price,omitempty"`
}
