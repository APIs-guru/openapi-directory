package shared

type InventoryResultItem struct {
	CaptureTime   *string             `json:"CaptureTime"`
	Content       []map[string]string `json:"Content"`
	ContentHash   *string             `json:"ContentHash"`
	SchemaVersion string              `json:"SchemaVersion"`
	TypeName      string              `json:"TypeName"`
}
