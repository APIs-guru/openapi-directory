package shared



type ListClusterJobsResult struct {
    JobListEntries []JobListEntry `json:"JobListEntries,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

