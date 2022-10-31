package shared



type ListSolutionsResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    Solutions []SolutionSummary `json:"solutions,omitempty"`
    
}

