package shared



type ConfusionMatrix struct {
    AnnotationSpecID []string `json:"annotationSpecId,omitempty"`
    DisplayName []string `json:"displayName,omitempty"`
    Row []ClassificationEvaluationMetricsConfusionMatrixRow `json:"row,omitempty"`
    
}

