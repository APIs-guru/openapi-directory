package shared

type EvaluationResult struct {
	F1Score *float32 `json:"F1Score"`
	Summary *Summary `json:"Summary"`
}
