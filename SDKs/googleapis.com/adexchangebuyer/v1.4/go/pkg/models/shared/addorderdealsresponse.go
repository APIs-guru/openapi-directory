package shared

type AddOrderDealsResponse struct {
	Deals                  []MarketplaceDeal `json:"deals,omitempty"`
	ProposalRevisionNumber *string           `json:"proposalRevisionNumber,omitempty"`
}
