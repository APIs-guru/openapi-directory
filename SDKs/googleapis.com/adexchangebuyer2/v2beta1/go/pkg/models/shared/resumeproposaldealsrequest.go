package shared

// ResumeProposalDealsRequest
// Request message to resume (unpause) serving for already-finalized deals.
type ResumeProposalDealsRequest struct {
	ExternalDealIds []string `json:"externalDealIds,omitempty"`
}
