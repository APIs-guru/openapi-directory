package shared

type PauseProposalDealsRequest struct {
	ExternalDealIds []string `json:"externalDealIds"`
	Reason          *string  `json:"reason"`
}
