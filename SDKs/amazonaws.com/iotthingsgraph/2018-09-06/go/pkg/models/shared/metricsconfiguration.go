package shared

type MetricsConfiguration struct {
	CloudMetricEnabled *bool   `json:"cloudMetricEnabled,omitempty"`
	MetricRuleRoleArn  *string `json:"metricRuleRoleArn,omitempty"`
}
