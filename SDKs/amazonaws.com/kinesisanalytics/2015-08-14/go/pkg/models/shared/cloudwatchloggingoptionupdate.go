package shared



type CloudWatchLoggingOptionUpdate struct {
    CloudWatchLoggingOptionID string `json:"CloudWatchLoggingOptionId"`
    LogStreamArnUpdate *string `json:"LogStreamARNUpdate,omitempty"`
    RoleArnUpdate *string `json:"RoleARNUpdate,omitempty"`
    
}

