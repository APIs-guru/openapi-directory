package shared



type MetricInfo struct {
    MetricDimensions map[string]string `json:"MetricDimensions,omitempty"`
    MetricName *string `json:"MetricName,omitempty"`
    MetricNamespace *string `json:"MetricNamespace,omitempty"`
    MetricStatisticRecommendation *string `json:"MetricStatisticRecommendation,omitempty"`
    
}

