package shared



type ListBatchInferenceJobsResponse struct {
    BatchInferenceJobs []BatchInferenceJobSummary `json:"batchInferenceJobs,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

