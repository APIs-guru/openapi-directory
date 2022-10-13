package shared

type GetLoadBalancerMetricDataResult struct {
	MetricData []MetricDatapoint           `json:"metricData"`
	MetricName *LoadBalancerMetricNameEnum `json:"metricName"`
}
