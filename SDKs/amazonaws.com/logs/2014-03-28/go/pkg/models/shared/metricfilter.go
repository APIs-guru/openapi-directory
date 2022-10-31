package shared



type MetricFilter struct {
    CreationTime *int64 `json:"creationTime,omitempty"`
    FilterName *string `json:"filterName,omitempty"`
    FilterPattern *string `json:"filterPattern,omitempty"`
    LogGroupName *string `json:"logGroupName,omitempty"`
    MetricTransformations []MetricTransformation `json:"metricTransformations,omitempty"`
    
}

