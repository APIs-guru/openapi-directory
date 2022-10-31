package shared

type GetInstanceMetricDataResult struct {
	MetricData []MetricDatapoint       `json:"metricData,omitempty"`
	MetricName *InstanceMetricNameEnum `json:"metricName,omitempty"`
}
