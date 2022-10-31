package shared



type ListProcessingJobsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    ProcessingJobSummaries []ProcessingJobSummary `json:"ProcessingJobSummaries"`
    
}

