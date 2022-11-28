package shared

// TextExtractionEvaluationMetricsConfidenceMetricsEntry
// Metrics for a single confidence threshold.
type TextExtractionEvaluationMetricsConfidenceMetricsEntry struct {
	ConfidenceThreshold *float32 `json:"confidenceThreshold,omitempty"`
	F1Score             *float32 `json:"f1Score,omitempty"`
	Precision           *float32 `json:"precision,omitempty"`
	Recall              *float32 `json:"recall,omitempty"`
}
