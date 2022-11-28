package shared

// TextExtractionEvaluationMetrics
// Model evaluation metrics for text extraction problems.
type TextExtractionEvaluationMetrics struct {
	AuPrc                    *float32                                                `json:"auPrc,omitempty"`
	ConfidenceMetricsEntries []TextExtractionEvaluationMetricsConfidenceMetricsEntry `json:"confidenceMetricsEntries,omitempty"`
}
