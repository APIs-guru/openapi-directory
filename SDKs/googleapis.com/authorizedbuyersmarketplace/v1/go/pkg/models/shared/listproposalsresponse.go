package shared

// ListProposalsResponse
// Response message for listing proposals.
type ListProposalsResponse struct {
	NextPageToken *string    `json:"nextPageToken,omitempty"`
	Proposals     []Proposal `json:"proposals,omitempty"`
}
