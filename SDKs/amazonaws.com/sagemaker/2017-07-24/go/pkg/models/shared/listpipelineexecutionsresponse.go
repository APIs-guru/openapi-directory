package shared

type ListPipelineExecutionsResponse struct {
	NextToken                  *string                    `json:"NextToken"`
	PipelineExecutionSummaries []PipelineExecutionSummary `json:"PipelineExecutionSummaries"`
}
