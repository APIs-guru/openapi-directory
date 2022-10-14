package shared

type StandardsSubscriptionRequest struct {
	StandardsArn   string            `json:"StandardsArn"`
	StandardsInput map[string]string `json:"StandardsInput,omitempty"`
}
