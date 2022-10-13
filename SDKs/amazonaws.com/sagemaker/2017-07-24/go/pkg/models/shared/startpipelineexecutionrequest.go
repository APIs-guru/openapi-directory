package shared

type StartPipelineExecutionRequest struct {
	ClientRequestToken           string      `json:"ClientRequestToken"`
	PipelineExecutionDescription *string     `json:"PipelineExecutionDescription"`
	PipelineExecutionDisplayName *string     `json:"PipelineExecutionDisplayName"`
	PipelineName                 string      `json:"PipelineName"`
	PipelineParameters           []Parameter `json:"PipelineParameters"`
}
