package shared



type BqmlIterationResult struct {
    DurationMs *string `json:"durationMs,omitempty"`
    EvalLoss *float64 `json:"evalLoss,omitempty"`
    Index *int32 `json:"index,omitempty"`
    LearnRate *float64 `json:"learnRate,omitempty"`
    TrainingLoss *float64 `json:"trainingLoss,omitempty"`
    
}

