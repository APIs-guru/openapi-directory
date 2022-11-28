package shared

// ListBidResponsesWithoutBidsResponse
// Response message for listing all reasons that bid responses were considered to have no applicable bids.
type ListBidResponsesWithoutBidsResponse struct {
	BidResponseWithoutBidsStatusRows []BidResponseWithoutBidsStatusRow `json:"bidResponseWithoutBidsStatusRows,omitempty"`
	NextPageToken                    *string                           `json:"nextPageToken,omitempty"`
}
