package shared

type AddOrderDealsRequest struct {
	Deals                  []MarketplaceDeal `json:"deals,omitempty"`
	ProposalRevisionNumber *string           `json:"proposalRevisionNumber,omitempty"`
	UpdateAction           *string           `json:"updateAction,omitempty"`
}
