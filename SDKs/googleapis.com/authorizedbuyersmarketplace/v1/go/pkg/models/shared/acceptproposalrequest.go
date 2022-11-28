package shared

// AcceptProposalRequest
// Request to accept a proposal. Accepting a proposal implies acceptance of the publisher terms_and_conditions, if any.
type AcceptProposalRequest struct {
	ProposalRevision *string `json:"proposalRevision,omitempty"`
}
