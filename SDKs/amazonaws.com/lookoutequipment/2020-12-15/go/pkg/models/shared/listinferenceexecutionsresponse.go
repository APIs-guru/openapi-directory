package shared



type ListInferenceExecutionsResponse struct {
    InferenceExecutionSummaries []InferenceExecutionSummary `json:"InferenceExecutionSummaries,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

