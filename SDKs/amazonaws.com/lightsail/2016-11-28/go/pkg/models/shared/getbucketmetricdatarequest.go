package shared

import (
"time")

type GetBucketMetricDataRequest struct {
    BucketName string `json:"bucketName"`
    EndTime time.Time `json:"endTime"`
    MetricName BucketMetricNameEnum `json:"metricName"`
    Period int64 `json:"period"`
    StartTime time.Time `json:"startTime"`
    Statistics []MetricStatisticEnum `json:"statistics"`
    Unit MetricUnitEnum `json:"unit"`
    
}

