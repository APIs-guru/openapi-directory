package shared

type EditAllOrderDealsRequest struct {
	Deals                  []MarketplaceDeal `json:"deals,omitempty"`
	Proposal               *Proposal         `json:"proposal,omitempty"`
	ProposalRevisionNumber *string           `json:"proposalRevisionNumber,omitempty"`
	UpdateAction           *string           `json:"updateAction,omitempty"`
}
