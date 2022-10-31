package shared



type Protection struct {
    HealthCheckIds []string `json:"HealthCheckIds,omitempty"`
    ID *string `json:"Id,omitempty"`
    Name *string `json:"Name,omitempty"`
    ProtectionArn *string `json:"ProtectionArn,omitempty"`
    ResourceArn *string `json:"ResourceArn,omitempty"`
    
}

