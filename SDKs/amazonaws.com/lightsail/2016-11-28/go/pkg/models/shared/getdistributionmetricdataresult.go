package shared

type GetDistributionMetricDataResult struct {
	MetricData []MetricDatapoint           `json:"metricData"`
	MetricName *DistributionMetricNameEnum `json:"metricName"`
}
