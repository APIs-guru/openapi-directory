package shared

type CreateEvaluationInput struct {
	EvaluationDataSourceID string  `json:"EvaluationDataSourceId"`
	EvaluationID           string  `json:"EvaluationId"`
	EvaluationName         *string `json:"EvaluationName,omitempty"`
	MlModelID              string  `json:"MLModelId"`
}
