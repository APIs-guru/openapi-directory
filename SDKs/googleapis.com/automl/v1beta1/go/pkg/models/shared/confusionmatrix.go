package shared

// ConfusionMatrix
// Confusion matrix of the model running the classification.
type ConfusionMatrix struct {
	AnnotationSpecID []string                                            `json:"annotationSpecId,omitempty"`
	DisplayName      []string                                            `json:"displayName,omitempty"`
	Row              []ClassificationEvaluationMetricsConfusionMatrixRow `json:"row,omitempty"`
}
