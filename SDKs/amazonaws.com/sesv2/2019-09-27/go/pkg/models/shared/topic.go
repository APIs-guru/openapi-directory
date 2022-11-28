package shared

// Topic
// An interest group, theme, or label within a list. Lists can have multiple topics.
type Topic struct {
	DefaultSubscriptionStatus SubscriptionStatusEnum `json:"DefaultSubscriptionStatus"`
	Description               *string                `json:"Description,omitempty"`
	DisplayName               string                 `json:"DisplayName"`
	TopicName                 string                 `json:"TopicName"`
}
