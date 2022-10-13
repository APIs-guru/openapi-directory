package shared

type ListPipelineParametersForExecutionResponse struct {
	NextToken          *string     `json:"NextToken"`
	PipelineParameters []Parameter `json:"PipelineParameters"`
}
