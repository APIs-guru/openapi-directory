package shared

type ReportRow struct {
	DimensionValues map[string]ReportRowDimensionValue `json:"dimensionValues"`
	MetricValues    map[string]ReportRowMetricValue    `json:"metricValues"`
}
