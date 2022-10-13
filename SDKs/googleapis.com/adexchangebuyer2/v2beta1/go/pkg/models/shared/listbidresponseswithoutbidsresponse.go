package shared

type ListBidResponsesWithoutBidsResponse struct {
	BidResponseWithoutBidsStatusRows []BidResponseWithoutBidsStatusRow `json:"bidResponseWithoutBidsStatusRows"`
	NextPageToken                    *string                           `json:"nextPageToken"`
}
