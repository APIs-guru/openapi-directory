package shared

type TopicFilter struct {
	TopicName                         *string `json:"TopicName,omitempty"`
	UseDefaultIfPreferenceUnavailable *bool   `json:"UseDefaultIfPreferenceUnavailable,omitempty"`
}
