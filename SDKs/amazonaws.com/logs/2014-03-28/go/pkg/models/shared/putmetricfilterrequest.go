package shared



type PutMetricFilterRequest struct {
    FilterName string `json:"filterName"`
    FilterPattern string `json:"filterPattern"`
    LogGroupName string `json:"logGroupName"`
    MetricTransformations []MetricTransformation `json:"metricTransformations"`
    
}

