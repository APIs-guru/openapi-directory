package shared

type DeleteOrderDealsRequest struct {
	DealIds                []string `json:"dealIds"`
	ProposalRevisionNumber *string  `json:"proposalRevisionNumber"`
	UpdateAction           *string  `json:"updateAction"`
}
