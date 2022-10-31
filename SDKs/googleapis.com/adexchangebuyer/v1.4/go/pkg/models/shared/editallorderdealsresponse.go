package shared



type EditAllOrderDealsResponse struct {
    Deals []MarketplaceDeal `json:"deals,omitempty"`
    OrderRevisionNumber *string `json:"orderRevisionNumber,omitempty"`
    
}

