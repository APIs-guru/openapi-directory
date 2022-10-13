package shared

type CalloutStatusRow struct {
	CalloutStatusID *int32         `json:"calloutStatusId"`
	ImpressionCount *MetricValue   `json:"impressionCount"`
	RowDimensions   *RowDimensions `json:"rowDimensions"`
}
