package shared



type TopicPreference struct {
    SubscriptionStatus SubscriptionStatusEnum `json:"SubscriptionStatus"`
    TopicName string `json:"TopicName"`
    
}

