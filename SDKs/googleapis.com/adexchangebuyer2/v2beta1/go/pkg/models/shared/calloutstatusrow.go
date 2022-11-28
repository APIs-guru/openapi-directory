package shared

// CalloutStatusRow
// The number of impressions with the specified dimension values where the corresponding bid request or bid response was not successful, as described by the specified callout status.
type CalloutStatusRow struct {
	CalloutStatusID *int32         `json:"calloutStatusId,omitempty"`
	ImpressionCount *MetricValue   `json:"impressionCount,omitempty"`
	RowDimensions   *RowDimensions `json:"rowDimensions,omitempty"`
}
