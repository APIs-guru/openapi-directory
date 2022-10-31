package shared



type PricingSummary struct {
    AuctionReservePrice *Amount `json:"auctionReservePrice,omitempty"`
    AuctionStartPrice *Amount `json:"auctionStartPrice,omitempty"`
    Price *Amount `json:"price,omitempty"`
    
}

