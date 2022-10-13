package shared

type NotificationConfigChangeRequest struct {
	ChannelIds []int32 `json:"channelIds"`
}
