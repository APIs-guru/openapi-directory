package shared

type UpdateMlModelInput struct {
	MlModelID      string   `json:"MLModelId"`
	MlModelName    *string  `json:"MLModelName"`
	ScoreThreshold *float32 `json:"ScoreThreshold"`
}
