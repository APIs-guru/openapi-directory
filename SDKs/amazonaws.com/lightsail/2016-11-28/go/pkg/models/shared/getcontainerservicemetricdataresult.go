package shared



type GetContainerServiceMetricDataResult struct {
    MetricData []MetricDatapoint `json:"metricData,omitempty"`
    MetricName *ContainerServiceMetricNameEnum `json:"metricName,omitempty"`
    
}

