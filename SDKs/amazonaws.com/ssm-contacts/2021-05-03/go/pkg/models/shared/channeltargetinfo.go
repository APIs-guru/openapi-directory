package shared

// ChannelTargetInfo
// Information about the contact channel that Incident Manager uses to engage the contact.
type ChannelTargetInfo struct {
	ContactChannelID       string `json:"ContactChannelId"`
	RetryIntervalInMinutes *int64 `json:"RetryIntervalInMinutes,omitempty"`
}
