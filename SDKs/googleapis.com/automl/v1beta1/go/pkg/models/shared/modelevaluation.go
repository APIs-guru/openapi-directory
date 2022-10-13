package shared

type ModelEvaluation struct {
	AnnotationSpecID                      *string                                `json:"annotationSpecId"`
	ClassificationEvaluationMetrics       *ClassificationEvaluationMetrics       `json:"classificationEvaluationMetrics"`
	CreateTime                            *string                                `json:"createTime"`
	DisplayName                           *string                                `json:"displayName"`
	EvaluatedExampleCount                 *int32                                 `json:"evaluatedExampleCount"`
	ImageObjectDetectionEvaluationMetrics *ImageObjectDetectionEvaluationMetrics `json:"imageObjectDetectionEvaluationMetrics"`
	Name                                  *string                                `json:"name"`
	RegressionEvaluationMetrics           *RegressionEvaluationMetrics           `json:"regressionEvaluationMetrics"`
	TextExtractionEvaluationMetrics       *TextExtractionEvaluationMetrics       `json:"textExtractionEvaluationMetrics"`
	TextSentimentEvaluationMetrics        *TextSentimentEvaluationMetrics        `json:"textSentimentEvaluationMetrics"`
	TranslationEvaluationMetrics          *TranslationEvaluationMetrics          `json:"translationEvaluationMetrics"`
	VideoObjectTrackingEvaluationMetrics  *VideoObjectTrackingEvaluationMetrics  `json:"videoObjectTrackingEvaluationMetrics"`
}
