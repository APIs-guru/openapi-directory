package shared

type DeleteOrderDealsResponse struct {
	Deals                  []MarketplaceDeal `json:"deals"`
	ProposalRevisionNumber *string           `json:"proposalRevisionNumber"`
}
