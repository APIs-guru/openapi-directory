package shared

type GetBucketMetricDataResult struct {
	MetricData []MetricDatapoint     `json:"metricData"`
	MetricName *BucketMetricNameEnum `json:"metricName"`
}
