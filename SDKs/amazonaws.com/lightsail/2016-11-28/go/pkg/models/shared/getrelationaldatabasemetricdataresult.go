package shared

type GetRelationalDatabaseMetricDataResult struct {
	MetricData []MetricDatapoint                 `json:"metricData"`
	MetricName *RelationalDatabaseMetricNameEnum `json:"metricName"`
}
