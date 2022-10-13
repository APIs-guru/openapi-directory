package shared

type EditAllOrderDealsRequest struct {
	Deals                  []MarketplaceDeal `json:"deals"`
	Proposal               *Proposal         `json:"proposal"`
	ProposalRevisionNumber *string           `json:"proposalRevisionNumber"`
	UpdateAction           *string           `json:"updateAction"`
}
