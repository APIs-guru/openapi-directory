package shared

// NotificationChannelActivationRequest
// Request model for switching notification channel status
type NotificationChannelActivationRequest struct {
	ChannelID int32 `json:"channelId"`
	IsEnabled bool  `json:"isEnabled"`
}
