package shared

type TranslationEvaluationMetrics struct {
	BaseBleuScore *float64 `json:"baseBleuScore"`
	BleuScore     *float64 `json:"bleuScore"`
}
