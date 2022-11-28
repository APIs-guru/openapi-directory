package shared

// InboxPlacementTrackingOption
// An object that contains information about the inbox placement data settings for a verified domain that’s associated with your AWS account. This data is available only if you enabled the Deliverability dashboard for the domain.
type InboxPlacementTrackingOption struct {
	Global      *bool    `json:"Global,omitempty"`
	TrackedIsps []string `json:"TrackedIsps,omitempty"`
}
