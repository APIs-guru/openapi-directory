package shared

type MarketplaceDealParty struct {
	Buyer  *Buyer  `json:"buyer"`
	Seller *Seller `json:"seller"`
}
