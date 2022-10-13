package shared

type ListPipelinesResponse struct {
	NextToken         *string           `json:"NextToken"`
	PipelineSummaries []PipelineSummary `json:"PipelineSummaries"`
}
