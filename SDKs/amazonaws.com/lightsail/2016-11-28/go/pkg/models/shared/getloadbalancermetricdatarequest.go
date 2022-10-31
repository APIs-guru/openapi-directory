package shared

import (
"time")

type GetLoadBalancerMetricDataRequest struct {
    EndTime time.Time `json:"endTime"`
    LoadBalancerName string `json:"loadBalancerName"`
    MetricName LoadBalancerMetricNameEnum `json:"metricName"`
    Period int64 `json:"period"`
    StartTime time.Time `json:"startTime"`
    Statistics []MetricStatisticEnum `json:"statistics"`
    Unit MetricUnitEnum `json:"unit"`
    
}

