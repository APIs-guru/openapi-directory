package shared

// MetricsConfiguration
// An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics.
type MetricsConfiguration struct {
	CloudMetricEnabled *bool   `json:"cloudMetricEnabled,omitempty"`
	MetricRuleRoleArn  *string `json:"metricRuleRoleArn,omitempty"`
}
