package shared

type BidMetricsRow struct {
	Bids                  *MetricValue   `json:"bids"`
	BidsInAuction         *MetricValue   `json:"bidsInAuction"`
	BilledImpressions     *MetricValue   `json:"billedImpressions"`
	ImpressionsWon        *MetricValue   `json:"impressionsWon"`
	MeasurableImpressions *MetricValue   `json:"measurableImpressions"`
	ReachedQueries        *MetricValue   `json:"reachedQueries"`
	RowDimensions         *RowDimensions `json:"rowDimensions"`
	ViewableImpressions   *MetricValue   `json:"viewableImpressions"`
}
