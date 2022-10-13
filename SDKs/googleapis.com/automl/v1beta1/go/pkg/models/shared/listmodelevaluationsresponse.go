package shared

type ListModelEvaluationsResponse struct {
	ModelEvaluation []ModelEvaluation `json:"modelEvaluation"`
	NextPageToken   *string           `json:"nextPageToken"`
}
