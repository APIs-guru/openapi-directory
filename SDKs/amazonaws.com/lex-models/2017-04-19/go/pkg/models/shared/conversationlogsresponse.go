package shared

type ConversationLogsResponse struct {
	IamRoleArn  *string               `json:"iamRoleArn"`
	LogSettings []LogSettingsResponse `json:"logSettings"`
}
