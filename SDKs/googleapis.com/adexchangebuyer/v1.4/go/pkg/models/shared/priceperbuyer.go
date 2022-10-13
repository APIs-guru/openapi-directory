package shared

type PricePerBuyer struct {
	AuctionTier *string `json:"auctionTier"`
	BilledBuyer *Buyer  `json:"billedBuyer"`
	Buyer       *Buyer  `json:"buyer"`
	Price       *Price  `json:"price"`
}
