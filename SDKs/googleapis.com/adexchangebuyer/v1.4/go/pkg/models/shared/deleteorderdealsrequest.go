package shared

type DeleteOrderDealsRequest struct {
	DealIds                []string `json:"dealIds,omitempty"`
	ProposalRevisionNumber *string  `json:"proposalRevisionNumber,omitempty"`
	UpdateAction           *string  `json:"updateAction,omitempty"`
}
