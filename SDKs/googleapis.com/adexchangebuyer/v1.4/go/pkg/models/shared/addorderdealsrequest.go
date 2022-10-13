package shared

type AddOrderDealsRequest struct {
	Deals                  []MarketplaceDeal `json:"deals"`
	ProposalRevisionNumber *string           `json:"proposalRevisionNumber"`
	UpdateAction           *string           `json:"updateAction"`
}
