package shared



type ListMilestonesOutput struct {
    MilestoneSummaries []MilestoneSummary `json:"MilestoneSummaries,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    WorkloadID *string `json:"WorkloadId,omitempty"`
    
}

