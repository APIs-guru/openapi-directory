package shared

// ListDealsResponse
// Response message for listing deals in a proposal.
type ListDealsResponse struct {
	Deals         []Deal  `json:"deals,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
