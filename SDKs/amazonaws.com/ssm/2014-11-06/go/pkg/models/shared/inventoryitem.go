package shared

type InventoryItem struct {
	CaptureTime   string              `json:"CaptureTime"`
	Content       []map[string]string `json:"Content"`
	ContentHash   *string             `json:"ContentHash"`
	Context       map[string]string   `json:"Context"`
	SchemaVersion string              `json:"SchemaVersion"`
	TypeName      string              `json:"TypeName"`
}
