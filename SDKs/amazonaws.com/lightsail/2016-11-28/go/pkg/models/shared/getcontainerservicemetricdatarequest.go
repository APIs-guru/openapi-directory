package shared

import (
"time")

type GetContainerServiceMetricDataRequest struct {
    EndTime time.Time `json:"endTime"`
    MetricName ContainerServiceMetricNameEnum `json:"metricName"`
    Period int64 `json:"period"`
    ServiceName string `json:"serviceName"`
    StartTime time.Time `json:"startTime"`
    Statistics []MetricStatisticEnum `json:"statistics"`
    
}

