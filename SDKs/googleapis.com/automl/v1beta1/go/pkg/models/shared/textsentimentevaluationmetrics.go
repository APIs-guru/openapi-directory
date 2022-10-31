package shared



type TextSentimentEvaluationMetrics struct {
    AnnotationSpecID []string `json:"annotationSpecId,omitempty"`
    ConfusionMatrix *ConfusionMatrix `json:"confusionMatrix,omitempty"`
    F1Score *float32 `json:"f1Score,omitempty"`
    LinearKappa *float32 `json:"linearKappa,omitempty"`
    MeanAbsoluteError *float32 `json:"meanAbsoluteError,omitempty"`
    MeanSquaredError *float32 `json:"meanSquaredError,omitempty"`
    Precision *float32 `json:"precision,omitempty"`
    QuadraticKappa *float32 `json:"quadraticKappa,omitempty"`
    Recall *float32 `json:"recall,omitempty"`
    
}

