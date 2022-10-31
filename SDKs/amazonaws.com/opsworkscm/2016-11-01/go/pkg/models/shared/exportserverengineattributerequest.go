package shared



type ExportServerEngineAttributeRequest struct {
    ExportAttributeName string `json:"ExportAttributeName"`
    InputAttributes []EngineAttribute `json:"InputAttributes,omitempty"`
    ServerName string `json:"ServerName"`
    
}

