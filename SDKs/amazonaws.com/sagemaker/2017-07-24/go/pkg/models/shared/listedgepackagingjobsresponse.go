package shared



type ListEdgePackagingJobsResponse struct {
    EdgePackagingJobSummaries []EdgePackagingJobSummary `json:"EdgePackagingJobSummaries"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

