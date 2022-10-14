package shared

type GetDistributionMetricDataResult struct {
	MetricData []MetricDatapoint           `json:"metricData,omitempty"`
	MetricName *DistributionMetricNameEnum `json:"metricName,omitempty"`
}
