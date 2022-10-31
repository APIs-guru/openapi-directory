package shared



type ClassificationEvaluationMetrics struct {
    AnnotationSpecID []string `json:"annotationSpecId,omitempty"`
    AuPrc *float32 `json:"auPrc,omitempty"`
    AuRoc *float32 `json:"auRoc,omitempty"`
    BaseAuPrc *float32 `json:"baseAuPrc,omitempty"`
    ConfidenceMetricsEntry []ClassificationEvaluationMetricsConfidenceMetricsEntry `json:"confidenceMetricsEntry,omitempty"`
    ConfusionMatrix *ConfusionMatrix `json:"confusionMatrix,omitempty"`
    LogLoss *float32 `json:"logLoss,omitempty"`
    
}

