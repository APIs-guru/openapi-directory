package shared

// BidMetricsRow
// The set of metrics that are measured in numbers of bids, representing how many bids with the specified dimension values were considered eligible at each stage of the bidding funnel;
type BidMetricsRow struct {
	Bids                  *MetricValue   `json:"bids,omitempty"`
	BidsInAuction         *MetricValue   `json:"bidsInAuction,omitempty"`
	BilledImpressions     *MetricValue   `json:"billedImpressions,omitempty"`
	ImpressionsWon        *MetricValue   `json:"impressionsWon,omitempty"`
	MeasurableImpressions *MetricValue   `json:"measurableImpressions,omitempty"`
	ReachedQueries        *MetricValue   `json:"reachedQueries,omitempty"`
	RowDimensions         *RowDimensions `json:"rowDimensions,omitempty"`
	ViewableImpressions   *MetricValue   `json:"viewableImpressions,omitempty"`
}
