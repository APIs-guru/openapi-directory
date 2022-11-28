package shared

// ListBidMetricsResponse
// Response message for listing the metrics that are measured in number of bids.
type ListBidMetricsResponse struct {
	BidMetricsRows []BidMetricsRow `json:"bidMetricsRows,omitempty"`
	NextPageToken  *string         `json:"nextPageToken,omitempty"`
}
