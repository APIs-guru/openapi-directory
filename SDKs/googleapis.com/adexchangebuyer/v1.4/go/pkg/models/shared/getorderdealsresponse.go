package shared

type GetOrderDealsResponse struct {
	Deals []MarketplaceDeal `json:"deals,omitempty"`
}
