package shared



type ListLaunchProfilesResponse struct {
    LaunchProfiles []LaunchProfile `json:"launchProfiles,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

