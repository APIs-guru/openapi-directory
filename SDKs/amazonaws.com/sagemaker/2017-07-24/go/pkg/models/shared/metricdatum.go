package shared

// MetricDatum
// Information about the metric for a candidate produced by an AutoML job.
type MetricDatum struct {
	MetricName *AutoMlMetricEnumEnum `json:"MetricName,omitempty"`
	Set        *MetricSetSourceEnum  `json:"Set,omitempty"`
	Value      *float32              `json:"Value,omitempty"`
}
