package shared

type Prediction struct {
	Details         map[string]string  `json:"details,omitempty"`
	PredictedLabel  *string            `json:"predictedLabel,omitempty"`
	PredictedScores map[string]float32 `json:"predictedScores,omitempty"`
	PredictedValue  *float32           `json:"predictedValue,omitempty"`
}
