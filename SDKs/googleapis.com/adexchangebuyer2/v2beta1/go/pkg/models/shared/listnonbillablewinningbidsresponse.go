package shared

type ListNonBillableWinningBidsResponse struct {
	NextPageToken                   *string                          `json:"nextPageToken"`
	NonBillableWinningBidStatusRows []NonBillableWinningBidStatusRow `json:"nonBillableWinningBidStatusRows"`
}
