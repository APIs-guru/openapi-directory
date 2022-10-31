package shared



type CloudWatchOutputConfig struct {
    CloudWatchLogGroupName *string `json:"CloudWatchLogGroupName,omitempty"`
    CloudWatchOutputEnabled *bool `json:"CloudWatchOutputEnabled,omitempty"`
    
}

