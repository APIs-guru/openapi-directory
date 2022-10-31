package shared

type AssociateHealthCheckRequest struct {
	HealthCheckArn string `json:"HealthCheckArn"`
	ProtectionID   string `json:"ProtectionId"`
}
