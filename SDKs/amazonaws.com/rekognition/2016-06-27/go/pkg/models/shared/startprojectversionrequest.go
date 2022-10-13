package shared

type StartProjectVersionRequest struct {
	MinInferenceUnits int64  `json:"MinInferenceUnits"`
	ProjectVersionArn string `json:"ProjectVersionArn"`
}
