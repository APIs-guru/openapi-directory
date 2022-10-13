package shared

type BqmlIterationResult struct {
	DurationMs   *string  `json:"durationMs"`
	EvalLoss     *float64 `json:"evalLoss"`
	Index        *int32   `json:"index"`
	LearnRate    *float64 `json:"learnRate"`
	TrainingLoss *float64 `json:"trainingLoss"`
}
