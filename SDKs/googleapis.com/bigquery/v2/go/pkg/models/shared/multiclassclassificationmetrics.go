package shared

// MultiClassClassificationMetrics
// Evaluation metrics for multi-class classification/classifier models.
type MultiClassClassificationMetrics struct {
	AggregateClassificationMetrics *AggregateClassificationMetrics `json:"aggregateClassificationMetrics,omitempty"`
	ConfusionMatrixList            []ConfusionMatrix               `json:"confusionMatrixList,omitempty"`
}
