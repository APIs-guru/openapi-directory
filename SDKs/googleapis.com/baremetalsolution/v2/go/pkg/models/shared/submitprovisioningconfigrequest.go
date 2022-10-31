package shared



type SubmitProvisioningConfigRequest struct {
    Email *string `json:"email,omitempty"`
    ProvisioningConfig *ProvisioningConfig `json:"provisioningConfig,omitempty"`
    
}

