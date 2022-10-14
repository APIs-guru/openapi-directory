package shared

type UpdatePipelineExecutionRequest struct {
	PipelineExecutionArn         string  `json:"PipelineExecutionArn"`
	PipelineExecutionDescription *string `json:"PipelineExecutionDescription,omitempty"`
	PipelineExecutionDisplayName *string `json:"PipelineExecutionDisplayName,omitempty"`
}
