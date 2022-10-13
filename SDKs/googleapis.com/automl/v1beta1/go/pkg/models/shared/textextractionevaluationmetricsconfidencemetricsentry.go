package shared

type TextExtractionEvaluationMetricsConfidenceMetricsEntry struct {
	ConfidenceThreshold *float32 `json:"confidenceThreshold"`
	F1Score             *float32 `json:"f1Score"`
	Precision           *float32 `json:"precision"`
	Recall              *float32 `json:"recall"`
}
