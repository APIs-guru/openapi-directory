package shared



type ListSolutionVersionsResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    SolutionVersions []SolutionVersionSummary `json:"solutionVersions,omitempty"`
    
}

