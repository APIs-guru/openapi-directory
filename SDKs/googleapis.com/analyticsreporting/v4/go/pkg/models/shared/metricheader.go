package shared

// MetricHeader
// The headers for the metrics.
type MetricHeader struct {
	MetricHeaderEntries []MetricHeaderEntry `json:"metricHeaderEntries,omitempty"`
	PivotHeaders        []PivotHeader       `json:"pivotHeaders,omitempty"`
}
