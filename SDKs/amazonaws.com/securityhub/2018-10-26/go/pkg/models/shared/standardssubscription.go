package shared



type StandardsSubscription struct {
    StandardsArn string `json:"StandardsArn"`
    StandardsInput map[string]string `json:"StandardsInput"`
    StandardsStatus StandardsStatusEnum `json:"StandardsStatus"`
    StandardsSubscriptionArn string `json:"StandardsSubscriptionArn"`
    
}

