package shared

// ListFilteredBidRequestsResponse
// Response message for listing all reasons that bid requests were filtered and not sent to the buyer.
type ListFilteredBidRequestsResponse struct {
	CalloutStatusRows []CalloutStatusRow `json:"calloutStatusRows,omitempty"`
	NextPageToken     *string            `json:"nextPageToken,omitempty"`
}
