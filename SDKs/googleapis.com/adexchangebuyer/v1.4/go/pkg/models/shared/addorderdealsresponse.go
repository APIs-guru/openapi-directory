package shared

type AddOrderDealsResponse struct {
	Deals                  []MarketplaceDeal `json:"deals"`
	ProposalRevisionNumber *string           `json:"proposalRevisionNumber"`
}
