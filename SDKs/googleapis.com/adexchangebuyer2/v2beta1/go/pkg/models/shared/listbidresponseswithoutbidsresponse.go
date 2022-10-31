package shared



type ListBidResponsesWithoutBidsResponse struct {
    BidResponseWithoutBidsStatusRows []BidResponseWithoutBidsStatusRow `json:"bidResponseWithoutBidsStatusRows,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

