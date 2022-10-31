package shared

type InboxPlacementTrackingOption struct {
	Global      *bool    `json:"Global,omitempty"`
	TrackedIsps []string `json:"TrackedIsps,omitempty"`
}
