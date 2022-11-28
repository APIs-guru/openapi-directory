package shared

// AcceptProposalRequest
// Request to accept a proposal.
type AcceptProposalRequest struct {
	ProposalRevision *string `json:"proposalRevision,omitempty"`
}
