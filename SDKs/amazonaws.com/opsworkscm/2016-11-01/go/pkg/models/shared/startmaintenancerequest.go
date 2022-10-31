package shared

type StartMaintenanceRequest struct {
	EngineAttributes []EngineAttribute `json:"EngineAttributes,omitempty"`
	ServerName       string            `json:"ServerName"`
}
