package shared

type MetricInfo struct {
	MetricDimensions              map[string]string `json:"MetricDimensions"`
	MetricName                    *string           `json:"MetricName"`
	MetricNamespace               *string           `json:"MetricNamespace"`
	MetricStatisticRecommendation *string           `json:"MetricStatisticRecommendation"`
}
