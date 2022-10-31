package shared

import (
"time")

type GetInstanceMetricDataRequest struct {
    EndTime time.Time `json:"endTime"`
    InstanceName string `json:"instanceName"`
    MetricName InstanceMetricNameEnum `json:"metricName"`
    Period int64 `json:"period"`
    StartTime time.Time `json:"startTime"`
    Statistics []MetricStatisticEnum `json:"statistics"`
    Unit MetricUnitEnum `json:"unit"`
    
}

