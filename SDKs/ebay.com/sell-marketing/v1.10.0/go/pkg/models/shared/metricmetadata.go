package shared

// MetricMetadata
// This type defines the name and data type of a metric.
type MetricMetadata struct {
	DataType  *string `json:"dataType,omitempty"`
	MetricKey *string `json:"metricKey,omitempty"`
}
