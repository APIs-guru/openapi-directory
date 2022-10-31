package shared



type ListNonBillableWinningBidsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    NonBillableWinningBidStatusRows []NonBillableWinningBidStatusRow `json:"nonBillableWinningBidStatusRows,omitempty"`
    
}

