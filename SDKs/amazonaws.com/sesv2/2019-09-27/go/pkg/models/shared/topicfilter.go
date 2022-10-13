package shared

type TopicFilter struct {
	TopicName                         *string `json:"TopicName"`
	UseDefaultIfPreferenceUnavailable *bool   `json:"UseDefaultIfPreferenceUnavailable"`
}
