package shared



type KycResponse struct {
    KycChecks []KycCheck `json:"kycChecks,omitempty"`
    
}

