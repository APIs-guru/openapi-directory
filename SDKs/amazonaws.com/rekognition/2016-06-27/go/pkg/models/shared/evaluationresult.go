package shared

type EvaluationResult struct {
	F1Score *float32 `json:"F1Score,omitempty"`
	Summary *Summary `json:"Summary,omitempty"`
}
