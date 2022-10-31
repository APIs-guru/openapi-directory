package shared



type ListComplianceSummariesRequest struct {
    Filters []ComplianceStringFilter `json:"Filters,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

