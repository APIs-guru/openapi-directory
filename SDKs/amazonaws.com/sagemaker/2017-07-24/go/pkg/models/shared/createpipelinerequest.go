package shared



type CreatePipelineRequest struct {
    ClientRequestToken string `json:"ClientRequestToken"`
    PipelineDefinition string `json:"PipelineDefinition"`
    PipelineDescription *string `json:"PipelineDescription,omitempty"`
    PipelineDisplayName *string `json:"PipelineDisplayName,omitempty"`
    PipelineName string `json:"PipelineName"`
    RoleArn string `json:"RoleArn"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

