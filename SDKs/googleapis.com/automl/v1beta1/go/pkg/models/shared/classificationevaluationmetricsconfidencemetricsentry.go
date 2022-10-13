package shared

type ClassificationEvaluationMetricsConfidenceMetricsEntry struct {
	ConfidenceThreshold  *float32 `json:"confidenceThreshold"`
	F1Score              *float32 `json:"f1Score"`
	F1ScoreAt1           *float32 `json:"f1ScoreAt1"`
	FalseNegativeCount   *string  `json:"falseNegativeCount"`
	FalsePositiveCount   *string  `json:"falsePositiveCount"`
	FalsePositiveRate    *float32 `json:"falsePositiveRate"`
	FalsePositiveRateAt1 *float32 `json:"falsePositiveRateAt1"`
	PositionThreshold    *int32   `json:"positionThreshold"`
	Precision            *float32 `json:"precision"`
	PrecisionAt1         *float32 `json:"precisionAt1"`
	Recall               *float32 `json:"recall"`
	RecallAt1            *float32 `json:"recallAt1"`
	TrueNegativeCount    *string  `json:"trueNegativeCount"`
	TruePositiveCount    *string  `json:"truePositiveCount"`
}
