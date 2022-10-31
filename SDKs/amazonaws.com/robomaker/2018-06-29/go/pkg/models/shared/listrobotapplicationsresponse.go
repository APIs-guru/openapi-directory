package shared



type ListRobotApplicationsResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    RobotApplicationSummaries []RobotApplicationSummary `json:"robotApplicationSummaries,omitempty"`
    
}

