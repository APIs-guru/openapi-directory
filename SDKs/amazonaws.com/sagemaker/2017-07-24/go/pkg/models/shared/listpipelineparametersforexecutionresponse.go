package shared



type ListPipelineParametersForExecutionResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    PipelineParameters []Parameter `json:"PipelineParameters,omitempty"`
    
}

