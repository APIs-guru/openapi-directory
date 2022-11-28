package shared

// AnomalyDetectorConfiguration
// The configuration specifies details about how the anomaly detection model is to be trained, including time ranges to exclude from use for training the model and the time zone to use for the metric.
type AnomalyDetectorConfiguration struct {
	ExcludedTimeRanges []Range
	MetricTimezone     *string
}
