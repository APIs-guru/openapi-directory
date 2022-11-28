package shared

// LegacyReference
// Type defining the legacyReference container. This container is needed if the seller is issuing a refund for an individual order line item, and wishes to use an item ID and transaction ID to identify the order line item.
type LegacyReference struct {
	LegacyItemID        *string `json:"legacyItemId,omitempty"`
	LegacyTransactionID *string `json:"legacyTransactionId,omitempty"`
}
