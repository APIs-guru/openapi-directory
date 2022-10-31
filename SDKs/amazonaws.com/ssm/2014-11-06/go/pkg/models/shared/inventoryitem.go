package shared



type InventoryItem struct {
    CaptureTime string `json:"CaptureTime"`
    Content []map[string]string `json:"Content,omitempty"`
    ContentHash *string `json:"ContentHash,omitempty"`
    Context map[string]string `json:"Context,omitempty"`
    SchemaVersion string `json:"SchemaVersion"`
    TypeName string `json:"TypeName"`
    
}

