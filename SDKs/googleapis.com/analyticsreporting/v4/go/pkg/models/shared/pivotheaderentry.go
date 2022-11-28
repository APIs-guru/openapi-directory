package shared

// PivotHeaderEntry
// The headers for the each of the metric column corresponding to the metrics requested in the pivots section of the response.
type PivotHeaderEntry struct {
	DimensionNames  []string           `json:"dimensionNames,omitempty"`
	DimensionValues []string           `json:"dimensionValues,omitempty"`
	Metric          *MetricHeaderEntry `json:"metric,omitempty"`
}
