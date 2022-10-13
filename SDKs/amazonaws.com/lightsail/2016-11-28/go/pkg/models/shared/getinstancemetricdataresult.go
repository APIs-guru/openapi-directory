package shared

type GetInstanceMetricDataResult struct {
	MetricData []MetricDatapoint       `json:"metricData"`
	MetricName *InstanceMetricNameEnum `json:"metricName"`
}
