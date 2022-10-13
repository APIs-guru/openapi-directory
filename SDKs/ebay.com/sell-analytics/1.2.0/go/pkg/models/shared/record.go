package shared

type Record struct {
	DimensionValues []Value `json:"dimensionValues"`
	MetricValues    []Value `json:"metricValues"`
}
