package shared

type PricePerBuyer struct {
	AuctionTier *string `json:"auctionTier,omitempty"`
	BilledBuyer *Buyer  `json:"billedBuyer,omitempty"`
	Buyer       *Buyer  `json:"buyer,omitempty"`
	Price       *Price  `json:"price,omitempty"`
}
