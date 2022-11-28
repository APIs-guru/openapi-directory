package shared

// ListFilteredBidsResponse
// Response message for listing all reasons that bids were filtered from the auction.
type ListFilteredBidsResponse struct {
	CreativeStatusRows []CreativeStatusRow `json:"creativeStatusRows,omitempty"`
	NextPageToken      *string             `json:"nextPageToken,omitempty"`
}
