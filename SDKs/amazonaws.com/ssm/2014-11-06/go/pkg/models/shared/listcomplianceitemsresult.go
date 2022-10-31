package shared



type ListComplianceItemsResult struct {
    ComplianceItems []ComplianceItem `json:"ComplianceItems,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

