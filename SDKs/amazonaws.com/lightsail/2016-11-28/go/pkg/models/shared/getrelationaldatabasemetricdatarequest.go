package shared

import (
"time")

type GetRelationalDatabaseMetricDataRequest struct {
    EndTime time.Time `json:"endTime"`
    MetricName RelationalDatabaseMetricNameEnum `json:"metricName"`
    Period int64 `json:"period"`
    RelationalDatabaseName string `json:"relationalDatabaseName"`
    StartTime time.Time `json:"startTime"`
    Statistics []MetricStatisticEnum `json:"statistics"`
    Unit MetricUnitEnum `json:"unit"`
    
}

