package shared

type GetRelationalDatabaseMetricDataResult struct {
	MetricData []MetricDatapoint                 `json:"metricData,omitempty"`
	MetricName *RelationalDatabaseMetricNameEnum `json:"metricName,omitempty"`
}
