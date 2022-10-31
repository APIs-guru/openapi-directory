package shared



type ListApplicationsResponse struct {
    Applications []ApplicationSummary `json:"applications,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

