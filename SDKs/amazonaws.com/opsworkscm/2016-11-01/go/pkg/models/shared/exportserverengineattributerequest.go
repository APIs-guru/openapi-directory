package shared

type ExportServerEngineAttributeRequest struct {
	ExportAttributeName string            `json:"ExportAttributeName"`
	InputAttributes     []EngineAttribute `json:"InputAttributes"`
	ServerName          string            `json:"ServerName"`
}
