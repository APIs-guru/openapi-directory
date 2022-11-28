package shared

// PauseProposalDealsRequest
// Request message to pause serving for finalized deals.
type PauseProposalDealsRequest struct {
	ExternalDealIds []string `json:"externalDealIds,omitempty"`
	Reason          *string  `json:"reason,omitempty"`
}
