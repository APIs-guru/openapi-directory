package shared

// FinalAutoMlJobObjectiveMetric
// The best candidate result from an AutoML training job.
type FinalAutoMlJobObjectiveMetric struct {
	MetricName AutoMlMetricEnumEnum        `json:"MetricName"`
	Type       *AutoMlJobObjectiveTypeEnum `json:"Type,omitempty"`
	Value      float32                     `json:"Value"`
}
