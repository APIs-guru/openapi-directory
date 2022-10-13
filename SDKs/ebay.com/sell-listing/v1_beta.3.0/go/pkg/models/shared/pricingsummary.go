package shared

type PricingSummary struct {
	AuctionReservePrice *Amount `json:"auctionReservePrice"`
	AuctionStartPrice   *Amount `json:"auctionStartPrice"`
	Price               *Amount `json:"price"`
}
