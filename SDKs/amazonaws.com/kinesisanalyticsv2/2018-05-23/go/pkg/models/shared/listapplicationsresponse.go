package shared



type ListApplicationsResponse struct {
    ApplicationSummaries []ApplicationSummary `json:"ApplicationSummaries"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

