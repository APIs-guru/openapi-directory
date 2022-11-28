package shared

// TopicPreference
// The contact's preference for being opted-in to or opted-out of a topic.
type TopicPreference struct {
	SubscriptionStatus SubscriptionStatusEnum `json:"SubscriptionStatus"`
	TopicName          string                 `json:"TopicName"`
}
