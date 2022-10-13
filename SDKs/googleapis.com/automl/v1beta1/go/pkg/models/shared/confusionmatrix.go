package shared

type ConfusionMatrix struct {
	AnnotationSpecID []string                                            `json:"annotationSpecId"`
	DisplayName      []string                                            `json:"displayName"`
	Row              []ClassificationEvaluationMetricsConfusionMatrixRow `json:"row"`
}
