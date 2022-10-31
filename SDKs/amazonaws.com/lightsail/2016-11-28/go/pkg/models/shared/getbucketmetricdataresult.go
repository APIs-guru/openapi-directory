package shared



type GetBucketMetricDataResult struct {
    MetricData []MetricDatapoint `json:"metricData,omitempty"`
    MetricName *BucketMetricNameEnum `json:"metricName,omitempty"`
    
}

