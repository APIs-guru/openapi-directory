package shared



type ListInferenceSchedulersResponse struct {
    InferenceSchedulerSummaries []InferenceSchedulerSummary `json:"InferenceSchedulerSummaries,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

