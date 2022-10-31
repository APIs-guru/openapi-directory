package shared

type ListPipelinesResponse struct {
	NextToken         *string           `json:"NextToken,omitempty"`
	PipelineSummaries []PipelineSummary `json:"PipelineSummaries,omitempty"`
}
