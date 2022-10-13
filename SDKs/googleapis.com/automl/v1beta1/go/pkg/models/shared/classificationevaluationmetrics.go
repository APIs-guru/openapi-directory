package shared

type ClassificationEvaluationMetrics struct {
	AnnotationSpecID       []string                                                `json:"annotationSpecId"`
	AuPrc                  *float32                                                `json:"auPrc"`
	AuRoc                  *float32                                                `json:"auRoc"`
	BaseAuPrc              *float32                                                `json:"baseAuPrc"`
	ConfidenceMetricsEntry []ClassificationEvaluationMetricsConfidenceMetricsEntry `json:"confidenceMetricsEntry"`
	ConfusionMatrix        *ConfusionMatrix                                        `json:"confusionMatrix"`
	LogLoss                *float32                                                `json:"logLoss"`
}
