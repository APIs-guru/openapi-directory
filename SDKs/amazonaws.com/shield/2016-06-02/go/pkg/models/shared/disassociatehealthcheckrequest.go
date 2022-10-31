package shared



type DisassociateHealthCheckRequest struct {
    HealthCheckArn string `json:"HealthCheckArn"`
    ProtectionID string `json:"ProtectionId"`
    
}

