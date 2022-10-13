package shared

type BinaryClassificationMetrics struct {
	AggregateClassificationMetrics *AggregateClassificationMetrics `json:"aggregateClassificationMetrics"`
	BinaryConfusionMatrixList      []BinaryConfusionMatrix         `json:"binaryConfusionMatrixList"`
	NegativeLabel                  *string                         `json:"negativeLabel"`
	PositiveLabel                  *string                         `json:"positiveLabel"`
}
