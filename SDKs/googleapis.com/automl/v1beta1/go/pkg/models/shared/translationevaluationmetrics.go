package shared

type TranslationEvaluationMetrics struct {
	BaseBleuScore *float64 `json:"baseBleuScore,omitempty"`
	BleuScore     *float64 `json:"bleuScore,omitempty"`
}
