package shared

// Metric
// Represents a specific metric.
type Metric struct {
	Dimensions []Dimension
	MetricName *string
	Namespace  *string
}
