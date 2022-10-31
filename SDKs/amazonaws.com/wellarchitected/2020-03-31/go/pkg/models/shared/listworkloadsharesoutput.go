package shared



type ListWorkloadSharesOutput struct {
    NextToken *string `json:"NextToken,omitempty"`
    WorkloadID *string `json:"WorkloadId,omitempty"`
    WorkloadShareSummaries []WorkloadShareSummary `json:"WorkloadShareSummaries,omitempty"`
    
}

