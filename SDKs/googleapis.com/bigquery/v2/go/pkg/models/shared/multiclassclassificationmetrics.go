package shared



type MultiClassClassificationMetrics struct {
    AggregateClassificationMetrics *AggregateClassificationMetrics `json:"aggregateClassificationMetrics,omitempty"`
    ConfusionMatrixList []ConfusionMatrix `json:"confusionMatrixList,omitempty"`
    
}

