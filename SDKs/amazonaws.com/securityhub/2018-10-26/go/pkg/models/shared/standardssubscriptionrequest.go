package shared

// StandardsSubscriptionRequest
// The standard that you want to enable.
type StandardsSubscriptionRequest struct {
	StandardsArn   string            `json:"StandardsArn"`
	StandardsInput map[string]string `json:"StandardsInput,omitempty"`
}
