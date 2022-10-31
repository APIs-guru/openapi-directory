package shared

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
