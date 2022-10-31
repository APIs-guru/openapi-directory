package shared



type UpdateProvisioningArtifactOutput struct {
    Info map[string]string `json:"Info,omitempty"`
    ProvisioningArtifactDetail *ProvisioningArtifactDetail `json:"ProvisioningArtifactDetail,omitempty"`
    Status *StatusEnum `json:"Status,omitempty"`
    
}

