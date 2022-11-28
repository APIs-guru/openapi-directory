package shared

// ListModelEvaluationsResponse
// Response message for AutoMl.ListModelEvaluations.
type ListModelEvaluationsResponse struct {
	ModelEvaluation []ModelEvaluation `json:"modelEvaluation,omitempty"`
	NextPageToken   *string           `json:"nextPageToken,omitempty"`
}
