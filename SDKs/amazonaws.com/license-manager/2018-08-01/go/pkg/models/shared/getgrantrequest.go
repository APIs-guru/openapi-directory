package shared



type GetGrantRequest struct {
    GrantArn string `json:"GrantArn"`
    Version *string `json:"Version,omitempty"`
    
}

