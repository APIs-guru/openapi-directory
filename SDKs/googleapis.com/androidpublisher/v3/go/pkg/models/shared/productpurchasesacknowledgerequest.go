package shared

// ProductPurchasesAcknowledgeRequest
// Request for the product.purchases.acknowledge API.
type ProductPurchasesAcknowledgeRequest struct {
	DeveloperPayload *string `json:"developerPayload,omitempty"`
}
