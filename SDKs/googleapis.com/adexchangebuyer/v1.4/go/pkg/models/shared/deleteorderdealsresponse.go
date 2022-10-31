package shared



type DeleteOrderDealsResponse struct {
    Deals []MarketplaceDeal `json:"deals,omitempty"`
    ProposalRevisionNumber *string `json:"proposalRevisionNumber,omitempty"`
    
}

