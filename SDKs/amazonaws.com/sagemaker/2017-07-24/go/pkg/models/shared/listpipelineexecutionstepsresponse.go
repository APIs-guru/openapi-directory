package shared



type ListPipelineExecutionStepsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    PipelineExecutionSteps []PipelineExecutionStep `json:"PipelineExecutionSteps,omitempty"`
    
}

