package shared

// Target
// The contact or contact channel that's being engaged.
type Target struct {
	ChannelTargetInfo *ChannelTargetInfo `json:"ChannelTargetInfo,omitempty"`
	ContactTargetInfo *ContactTargetInfo `json:"ContactTargetInfo,omitempty"`
}
