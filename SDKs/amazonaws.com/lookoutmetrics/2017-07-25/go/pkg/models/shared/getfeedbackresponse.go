package shared

type GetFeedbackResponse struct {
	AnomalyGroupTimeSeriesFeedback []TimeSeriesFeedback `json:"AnomalyGroupTimeSeriesFeedback"`
	NextToken                      *string              `json:"NextToken"`
}
