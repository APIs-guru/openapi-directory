package shared

type ListInferenceSchedulersResponse struct {
	InferenceSchedulerSummaries []InferenceSchedulerSummary `json:"InferenceSchedulerSummaries"`
	NextToken                   *string                     `json:"NextToken"`
}
