package shared

type Prediction struct {
	Details         map[string]string  `json:"details"`
	PredictedLabel  *string            `json:"predictedLabel"`
	PredictedScores map[string]float32 `json:"predictedScores"`
	PredictedValue  *float32           `json:"predictedValue"`
}
