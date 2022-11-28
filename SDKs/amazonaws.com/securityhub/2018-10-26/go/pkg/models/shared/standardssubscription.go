package shared

// StandardsSubscription
// A resource that represents your subscription to a supported standard.
type StandardsSubscription struct {
	StandardsArn             string              `json:"StandardsArn"`
	StandardsInput           map[string]string   `json:"StandardsInput"`
	StandardsStatus          StandardsStatusEnum `json:"StandardsStatus"`
	StandardsSubscriptionArn string              `json:"StandardsSubscriptionArn"`
}
