package shared

type UpdatePipelineExecutionRequest struct {
	PipelineExecutionArn         string  `json:"PipelineExecutionArn"`
	PipelineExecutionDescription *string `json:"PipelineExecutionDescription"`
	PipelineExecutionDisplayName *string `json:"PipelineExecutionDisplayName"`
}
