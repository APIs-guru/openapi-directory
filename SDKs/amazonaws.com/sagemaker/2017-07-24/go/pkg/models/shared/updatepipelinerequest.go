package shared



type UpdatePipelineRequest struct {
    PipelineDefinition *string `json:"PipelineDefinition,omitempty"`
    PipelineDescription *string `json:"PipelineDescription,omitempty"`
    PipelineDisplayName *string `json:"PipelineDisplayName,omitempty"`
    PipelineName string `json:"PipelineName"`
    RoleArn *string `json:"RoleArn,omitempty"`
    
}

