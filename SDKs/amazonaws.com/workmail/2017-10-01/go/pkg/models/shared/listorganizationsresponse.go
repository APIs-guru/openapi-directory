package shared



type ListOrganizationsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    OrganizationSummaries []OrganizationSummary `json:"OrganizationSummaries,omitempty"`
    
}

