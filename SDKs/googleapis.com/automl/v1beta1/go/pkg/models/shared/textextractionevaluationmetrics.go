package shared

type TextExtractionEvaluationMetrics struct {
	AuPrc                    *float32                                                `json:"auPrc"`
	ConfidenceMetricsEntries []TextExtractionEvaluationMetricsConfidenceMetricsEntry `json:"confidenceMetricsEntries"`
}
