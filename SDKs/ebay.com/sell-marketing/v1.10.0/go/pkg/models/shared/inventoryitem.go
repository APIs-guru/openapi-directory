package shared

// InventoryItem
// This type defines the fields for the seller inventory reference IDs (also known as an &quot;SKU&quot; or &quot;custom label&quot;).
type InventoryItem struct {
	InventoryReferenceID *string `json:"inventoryReferenceId,omitempty"`
}
