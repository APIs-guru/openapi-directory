package shared



type ListLaunchPathsOutput struct {
    LaunchPathSummaries []LaunchPathSummary `json:"LaunchPathSummaries,omitempty"`
    NextPageToken *string `json:"NextPageToken,omitempty"`
    
}

