package shared

// ClassificationEvaluationMetrics
// Model evaluation metrics for classification problems. Note: For Video Classification this metrics only describe quality of the Video Classification predictions of "segment_classification" type.
type ClassificationEvaluationMetrics struct {
	AnnotationSpecID       []string                                                `json:"annotationSpecId,omitempty"`
	AuPrc                  *float32                                                `json:"auPrc,omitempty"`
	AuRoc                  *float32                                                `json:"auRoc,omitempty"`
	BaseAuPrc              *float32                                                `json:"baseAuPrc,omitempty"`
	ConfidenceMetricsEntry []ClassificationEvaluationMetricsConfidenceMetricsEntry `json:"confidenceMetricsEntry,omitempty"`
	ConfusionMatrix        *ConfusionMatrix                                        `json:"confusionMatrix,omitempty"`
	LogLoss                *float32                                                `json:"logLoss,omitempty"`
}
