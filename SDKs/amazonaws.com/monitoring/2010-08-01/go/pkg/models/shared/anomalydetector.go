package shared

// AnomalyDetector
// An anomaly detection model associated with a particular CloudWatch metric and statistic. You can use the model to display a band of expected normal values when the metric is graphed.
type AnomalyDetector struct {
	Configuration *AnomalyDetectorConfiguration
	Dimensions    []Dimension
	MetricName    *string
	Namespace     *string
	Stat          *string
	StateValue    *AnomalyDetectorStateValueEnum
}
