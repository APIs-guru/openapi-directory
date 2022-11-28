package shared

// SubscriptionPurchasesAcknowledgeRequest
// Request for the purchases.subscriptions.acknowledge API.
type SubscriptionPurchasesAcknowledgeRequest struct {
	DeveloperPayload *string `json:"developerPayload,omitempty"`
}
