package shared

type CalloutStatusRow struct {
	CalloutStatusID *int32         `json:"calloutStatusId,omitempty"`
	ImpressionCount *MetricValue   `json:"impressionCount,omitempty"`
	RowDimensions   *RowDimensions `json:"rowDimensions,omitempty"`
}
