package shared

type GetContainerServiceMetricDataResult struct {
	MetricData []MetricDatapoint               `json:"metricData"`
	MetricName *ContainerServiceMetricNameEnum `json:"metricName"`
}
