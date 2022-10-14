package shared

type Row struct {
	DimensionValues []DimensionValue `json:"dimensionValues,omitempty"`
	MetricValues    []MetricValue    `json:"metricValues,omitempty"`
}
