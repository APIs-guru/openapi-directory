package shared

type PauseProposalDealsRequest struct {
	ExternalDealIds []string `json:"externalDealIds,omitempty"`
	Reason          *string  `json:"reason,omitempty"`
}
