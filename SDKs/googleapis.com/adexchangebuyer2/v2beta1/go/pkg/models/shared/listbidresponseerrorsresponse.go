package shared

// ListBidResponseErrorsResponse
// Response message for listing all reasons that bid responses resulted in an error.
type ListBidResponseErrorsResponse struct {
	CalloutStatusRows []CalloutStatusRow `json:"calloutStatusRows,omitempty"`
	NextPageToken     *string            `json:"nextPageToken,omitempty"`
}
