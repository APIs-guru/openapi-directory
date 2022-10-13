package shared

type Row struct {
	DimensionValues []DimensionValue `json:"dimensionValues"`
	MetricValues    []MetricValue    `json:"metricValues"`
}
