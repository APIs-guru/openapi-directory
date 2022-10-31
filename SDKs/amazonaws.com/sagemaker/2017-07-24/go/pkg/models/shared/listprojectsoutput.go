package shared



type ListProjectsOutput struct {
    NextToken *string `json:"NextToken,omitempty"`
    ProjectSummaryList []ProjectSummary `json:"ProjectSummaryList"`
    
}

