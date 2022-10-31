package shared



type TextExtractionEvaluationMetrics struct {
    AuPrc *float32 `json:"auPrc,omitempty"`
    ConfidenceMetricsEntries []TextExtractionEvaluationMetricsConfidenceMetricsEntry `json:"confidenceMetricsEntries,omitempty"`
    
}

