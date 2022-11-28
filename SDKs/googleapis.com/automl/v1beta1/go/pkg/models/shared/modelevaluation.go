package shared

// ModelEvaluation
// Evaluation results of a model.
type ModelEvaluation struct {
	AnnotationSpecID                      *string                                `json:"annotationSpecId,omitempty"`
	ClassificationEvaluationMetrics       *ClassificationEvaluationMetrics       `json:"classificationEvaluationMetrics,omitempty"`
	CreateTime                            *string                                `json:"createTime,omitempty"`
	DisplayName                           *string                                `json:"displayName,omitempty"`
	EvaluatedExampleCount                 *int32                                 `json:"evaluatedExampleCount,omitempty"`
	ImageObjectDetectionEvaluationMetrics *ImageObjectDetectionEvaluationMetrics `json:"imageObjectDetectionEvaluationMetrics,omitempty"`
	Name                                  *string                                `json:"name,omitempty"`
	RegressionEvaluationMetrics           *RegressionEvaluationMetrics           `json:"regressionEvaluationMetrics,omitempty"`
	TextExtractionEvaluationMetrics       *TextExtractionEvaluationMetrics       `json:"textExtractionEvaluationMetrics,omitempty"`
	TextSentimentEvaluationMetrics        *TextSentimentEvaluationMetrics        `json:"textSentimentEvaluationMetrics,omitempty"`
	TranslationEvaluationMetrics          *TranslationEvaluationMetrics          `json:"translationEvaluationMetrics,omitempty"`
	VideoObjectTrackingEvaluationMetrics  *VideoObjectTrackingEvaluationMetrics  `json:"videoObjectTrackingEvaluationMetrics,omitempty"`
}
