package shared

type ExportServerEngineAttributeResponse struct {
	EngineAttribute *EngineAttribute `json:"EngineAttribute,omitempty"`
	ServerName      *string          `json:"ServerName,omitempty"`
}
