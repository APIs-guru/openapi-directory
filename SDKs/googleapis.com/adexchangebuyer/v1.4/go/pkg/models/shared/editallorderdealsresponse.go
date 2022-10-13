package shared

type EditAllOrderDealsResponse struct {
	Deals               []MarketplaceDeal `json:"deals"`
	OrderRevisionNumber *string           `json:"orderRevisionNumber"`
}
