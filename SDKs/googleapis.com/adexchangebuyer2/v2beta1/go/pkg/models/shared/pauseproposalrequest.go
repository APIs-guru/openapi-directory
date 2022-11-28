package shared

// PauseProposalRequest
// Request message to pause serving for an already-finalized proposal.
type PauseProposalRequest struct {
	Reason *string `json:"reason,omitempty"`
}
