package shared

type ListModelEvaluationsResponse struct {
	ModelEvaluation []ModelEvaluation `json:"modelEvaluation,omitempty"`
	NextPageToken   *string           `json:"nextPageToken,omitempty"`
}
