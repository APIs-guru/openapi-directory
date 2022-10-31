package shared



type ConfigIpmi struct {
    PrimaryPort *int32 `json:"primary_port,omitempty"`
    SecurePort *int32 `json:"secure_port,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

