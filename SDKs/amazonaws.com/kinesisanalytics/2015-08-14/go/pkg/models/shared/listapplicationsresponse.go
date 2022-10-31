package shared



type ListApplicationsResponse struct {
    ApplicationSummaries []ApplicationSummary `json:"ApplicationSummaries"`
    HasMoreApplications bool `json:"HasMoreApplications"`
    
}

