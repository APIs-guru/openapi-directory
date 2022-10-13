package shared

type ListBidMetricsResponse struct {
	BidMetricsRows []BidMetricsRow `json:"bidMetricsRows"`
	NextPageToken  *string         `json:"nextPageToken"`
}
