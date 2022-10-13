package shared

type StartMaintenanceRequest struct {
	EngineAttributes []EngineAttribute `json:"EngineAttributes"`
	ServerName       string            `json:"ServerName"`
}
