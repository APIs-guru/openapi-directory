package shared

// Record
// Type that defines the fields of the individual record of the report.
type Record struct {
	DimensionValues []Value `json:"dimensionValues,omitempty"`
	MetricValues    []Value `json:"metricValues,omitempty"`
}
