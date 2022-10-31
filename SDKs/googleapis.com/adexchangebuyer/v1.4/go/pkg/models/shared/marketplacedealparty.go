package shared

type MarketplaceDealParty struct {
	Buyer  *Buyer  `json:"buyer,omitempty"`
	Seller *Seller `json:"seller,omitempty"`
}
