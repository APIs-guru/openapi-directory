package shared

type ListInferenceExecutionsResponse struct {
	InferenceExecutionSummaries []InferenceExecutionSummary `json:"InferenceExecutionSummaries"`
	NextToken                   *string                     `json:"NextToken"`
}
