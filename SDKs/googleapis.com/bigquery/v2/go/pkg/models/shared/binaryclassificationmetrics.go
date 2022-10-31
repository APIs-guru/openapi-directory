package shared

type BinaryClassificationMetrics struct {
	AggregateClassificationMetrics *AggregateClassificationMetrics `json:"aggregateClassificationMetrics,omitempty"`
	BinaryConfusionMatrixList      []BinaryConfusionMatrix         `json:"binaryConfusionMatrixList,omitempty"`
	NegativeLabel                  *string                         `json:"negativeLabel,omitempty"`
	PositiveLabel                  *string                         `json:"positiveLabel,omitempty"`
}
