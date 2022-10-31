package shared



type ClassificationEvaluationMetricsConfidenceMetricsEntry struct {
    ConfidenceThreshold *float32 `json:"confidenceThreshold,omitempty"`
    F1Score *float32 `json:"f1Score,omitempty"`
    F1ScoreAt1 *float32 `json:"f1ScoreAt1,omitempty"`
    FalseNegativeCount *string `json:"falseNegativeCount,omitempty"`
    FalsePositiveCount *string `json:"falsePositiveCount,omitempty"`
    FalsePositiveRate *float32 `json:"falsePositiveRate,omitempty"`
    FalsePositiveRateAt1 *float32 `json:"falsePositiveRateAt1,omitempty"`
    PositionThreshold *int32 `json:"positionThreshold,omitempty"`
    Precision *float32 `json:"precision,omitempty"`
    PrecisionAt1 *float32 `json:"precisionAt1,omitempty"`
    Recall *float32 `json:"recall,omitempty"`
    RecallAt1 *float32 `json:"recallAt1,omitempty"`
    TrueNegativeCount *string `json:"trueNegativeCount,omitempty"`
    TruePositiveCount *string `json:"truePositiveCount,omitempty"`
    
}

