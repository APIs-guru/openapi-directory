package shared

// InventoryResultItem
// The inventory result item.
type InventoryResultItem struct {
	CaptureTime   *string             `json:"CaptureTime,omitempty"`
	Content       []map[string]string `json:"Content"`
	ContentHash   *string             `json:"ContentHash,omitempty"`
	SchemaVersion string              `json:"SchemaVersion"`
	TypeName      string              `json:"TypeName"`
}
