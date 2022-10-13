package shared

type MetricsConfiguration struct {
	CloudMetricEnabled *bool   `json:"cloudMetricEnabled"`
	MetricRuleRoleArn  *string `json:"metricRuleRoleArn"`
}
