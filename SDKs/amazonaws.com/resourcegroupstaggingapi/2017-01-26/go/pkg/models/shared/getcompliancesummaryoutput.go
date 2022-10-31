package shared



type GetComplianceSummaryOutput struct {
    PaginationToken *string `json:"PaginationToken,omitempty"`
    SummaryList []Summary `json:"SummaryList,omitempty"`
    
}

