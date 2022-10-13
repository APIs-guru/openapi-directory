package shared

type MetricDatum struct {
	MetricName *AutoMlMetricEnumEnum `json:"MetricName"`
	Set        *MetricSetSourceEnum  `json:"Set"`
	Value      *float32              `json:"Value"`
}
