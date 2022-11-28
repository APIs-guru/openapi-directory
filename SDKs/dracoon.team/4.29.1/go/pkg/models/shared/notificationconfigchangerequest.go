package shared

// NotificationConfigChangeRequest
// Request model for updating notification configuration
type NotificationConfigChangeRequest struct {
	ChannelIds []int32 `json:"channelIds"`
}
