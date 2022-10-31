package shared



type ConversationLogsResponse struct {
    IamRoleArn *string `json:"iamRoleArn,omitempty"`
    LogSettings []LogSettingsResponse `json:"logSettings,omitempty"`
    
}

