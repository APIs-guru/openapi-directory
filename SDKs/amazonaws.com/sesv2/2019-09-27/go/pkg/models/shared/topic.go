package shared

type Topic struct {
	DefaultSubscriptionStatus SubscriptionStatusEnum `json:"DefaultSubscriptionStatus"`
	Description               *string                `json:"Description,omitempty"`
	DisplayName               string                 `json:"DisplayName"`
	TopicName                 string                 `json:"TopicName"`
}
