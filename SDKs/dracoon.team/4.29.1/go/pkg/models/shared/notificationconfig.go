package shared

// NotificationConfig
// Notification configuration information
type NotificationConfig struct {
	ChannelIds    []int32 `json:"channelIds"`
	EventTypeName string  `json:"eventTypeName"`
	ID            int64   `json:"id"`
	ScopeID       int32   `json:"scopeId"`
}
