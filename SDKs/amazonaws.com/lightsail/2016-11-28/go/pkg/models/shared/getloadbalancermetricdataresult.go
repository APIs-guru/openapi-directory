package shared



type GetLoadBalancerMetricDataResult struct {
    MetricData []MetricDatapoint `json:"metricData,omitempty"`
    MetricName *LoadBalancerMetricNameEnum `json:"metricName,omitempty"`
    
}

