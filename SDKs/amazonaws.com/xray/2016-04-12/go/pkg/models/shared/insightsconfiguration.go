package shared

// InsightsConfiguration
// The structure containing configurations related to insights.
type InsightsConfiguration struct {
	InsightsEnabled      *bool `json:"InsightsEnabled,omitempty"`
	NotificationsEnabled *bool `json:"NotificationsEnabled,omitempty"`
}
