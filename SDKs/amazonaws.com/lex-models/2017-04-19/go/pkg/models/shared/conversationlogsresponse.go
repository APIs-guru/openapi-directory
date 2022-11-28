package shared

// ConversationLogsResponse
// Contains information about conversation log settings.
type ConversationLogsResponse struct {
	IamRoleArn  *string               `json:"iamRoleArn,omitempty"`
	LogSettings []LogSettingsResponse `json:"logSettings,omitempty"`
}
