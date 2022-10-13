package shared

type UpdatePipelineRequest struct {
	PipelineDefinition  *string `json:"PipelineDefinition"`
	PipelineDescription *string `json:"PipelineDescription"`
	PipelineDisplayName *string `json:"PipelineDisplayName"`
	PipelineName        string  `json:"PipelineName"`
	RoleArn             *string `json:"RoleArn"`
}
