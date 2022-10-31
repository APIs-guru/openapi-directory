package shared

type ChannelTargetInfo struct {
	ContactChannelID       string `json:"ContactChannelId"`
	RetryIntervalInMinutes *int64 `json:"RetryIntervalInMinutes,omitempty"`
}
