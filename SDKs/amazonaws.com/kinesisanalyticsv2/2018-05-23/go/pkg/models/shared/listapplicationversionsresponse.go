package shared



type ListApplicationVersionsResponse struct {
    ApplicationVersionSummaries []ApplicationVersionSummary `json:"ApplicationVersionSummaries,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

