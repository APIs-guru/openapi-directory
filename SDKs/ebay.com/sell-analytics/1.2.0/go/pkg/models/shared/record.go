package shared

type Record struct {
	DimensionValues []Value `json:"dimensionValues,omitempty"`
	MetricValues    []Value `json:"metricValues,omitempty"`
}
