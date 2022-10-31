package shared



type ListActivitiesOutput struct {
    Activities []ActivityListItem `json:"activities"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

