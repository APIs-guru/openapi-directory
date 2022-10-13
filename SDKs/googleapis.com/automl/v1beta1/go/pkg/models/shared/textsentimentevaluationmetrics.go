package shared

type TextSentimentEvaluationMetrics struct {
	AnnotationSpecID  []string         `json:"annotationSpecId"`
	ConfusionMatrix   *ConfusionMatrix `json:"confusionMatrix"`
	F1Score           *float32         `json:"f1Score"`
	LinearKappa       *float32         `json:"linearKappa"`
	MeanAbsoluteError *float32         `json:"meanAbsoluteError"`
	MeanSquaredError  *float32         `json:"meanSquaredError"`
	Precision         *float32         `json:"precision"`
	QuadraticKappa    *float32         `json:"quadraticKappa"`
	Recall            *float32         `json:"recall"`
}
