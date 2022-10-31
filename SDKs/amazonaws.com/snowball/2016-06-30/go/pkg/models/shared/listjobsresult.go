package shared



type ListJobsResult struct {
    JobListEntries []JobListEntry `json:"JobListEntries,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

