package shared



type StartPipelineExecutionRequest struct {
    ClientRequestToken string `json:"ClientRequestToken"`
    PipelineExecutionDescription *string `json:"PipelineExecutionDescription,omitempty"`
    PipelineExecutionDisplayName *string `json:"PipelineExecutionDisplayName,omitempty"`
    PipelineName string `json:"PipelineName"`
    PipelineParameters []Parameter `json:"PipelineParameters,omitempty"`
    
}

