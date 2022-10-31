package shared

type ListBidMetricsResponse struct {
	BidMetricsRows []BidMetricsRow `json:"bidMetricsRows,omitempty"`
	NextPageToken  *string         `json:"nextPageToken,omitempty"`
}
