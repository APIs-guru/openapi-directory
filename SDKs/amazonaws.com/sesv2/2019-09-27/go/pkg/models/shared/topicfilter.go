package shared

// TopicFilter
// Used for filtering by a specific topic preference.
type TopicFilter struct {
	TopicName                         *string `json:"TopicName,omitempty"`
	UseDefaultIfPreferenceUnavailable *bool   `json:"UseDefaultIfPreferenceUnavailable,omitempty"`
}
