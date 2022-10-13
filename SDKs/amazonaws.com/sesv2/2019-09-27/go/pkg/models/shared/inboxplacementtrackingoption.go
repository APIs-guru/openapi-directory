package shared

type InboxPlacementTrackingOption struct {
	Global      *bool    `json:"Global"`
	TrackedIsps []string `json:"TrackedIsps"`
}
