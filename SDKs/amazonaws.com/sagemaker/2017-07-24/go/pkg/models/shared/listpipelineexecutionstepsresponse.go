package shared

type ListPipelineExecutionStepsResponse struct {
	NextToken              *string                 `json:"NextToken"`
	PipelineExecutionSteps []PipelineExecutionStep `json:"PipelineExecutionSteps"`
}
