package shared



type ListPipelineExecutionsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    PipelineExecutionSummaries []PipelineExecutionSummary `json:"PipelineExecutionSummaries,omitempty"`
    
}

