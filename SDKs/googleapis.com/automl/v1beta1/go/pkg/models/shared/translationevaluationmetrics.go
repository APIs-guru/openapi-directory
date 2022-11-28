package shared

// TranslationEvaluationMetrics
// Evaluation metrics for the dataset.
type TranslationEvaluationMetrics struct {
	BaseBleuScore *float64 `json:"baseBleuScore,omitempty"`
	BleuScore     *float64 `json:"bleuScore,omitempty"`
}
