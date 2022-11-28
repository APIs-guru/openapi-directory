package shared

// ListNonBillableWinningBidsResponse
// Response message for listing all reasons for which a buyer was not billed for a winning bid.
type ListNonBillableWinningBidsResponse struct {
	NextPageToken                   *string                          `json:"nextPageToken,omitempty"`
	NonBillableWinningBidStatusRows []NonBillableWinningBidStatusRow `json:"nonBillableWinningBidStatusRows,omitempty"`
}
