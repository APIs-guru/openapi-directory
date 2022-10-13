package shared

type ExportServerEngineAttributeResponse struct {
	EngineAttribute *EngineAttribute `json:"EngineAttribute"`
	ServerName      *string          `json:"ServerName"`
}
