package shared

import (
"time")

type GetDistributionMetricDataRequest struct {
    DistributionName string `json:"distributionName"`
    EndTime time.Time `json:"endTime"`
    MetricName DistributionMetricNameEnum `json:"metricName"`
    Period int64 `json:"period"`
    StartTime time.Time `json:"startTime"`
    Statistics []MetricStatisticEnum `json:"statistics"`
    Unit MetricUnitEnum `json:"unit"`
    
}

