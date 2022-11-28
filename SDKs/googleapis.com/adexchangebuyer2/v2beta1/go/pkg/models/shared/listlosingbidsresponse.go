package shared

// ListLosingBidsResponse
// Response message for listing all reasons that bids lost in the auction.
type ListLosingBidsResponse struct {
	CreativeStatusRows []CreativeStatusRow `json:"creativeStatusRows,omitempty"`
	NextPageToken      *string             `json:"nextPageToken,omitempty"`
}
