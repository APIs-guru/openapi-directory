package shared

type MultiClassClassificationMetrics struct {
	AggregateClassificationMetrics *AggregateClassificationMetrics `json:"aggregateClassificationMetrics"`
	ConfusionMatrixList            []ConfusionMatrix               `json:"confusionMatrixList"`
}
