package shared

// ReportRow
// A row of the returning report.
type ReportRow struct {
	DimensionValues map[string]ReportRowDimensionValue `json:"dimensionValues,omitempty"`
	MetricValues    map[string]ReportRowMetricValue    `json:"metricValues,omitempty"`
}
