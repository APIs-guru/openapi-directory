package shared

// AutoMlJobObjective
// Specifies a metric to minimize or maximize as the objective of a job.
type AutoMlJobObjective struct {
	MetricName AutoMlMetricEnumEnum `json:"MetricName"`
}
