package shared



type ProvisioningArtifactProperties struct {
    Description *string `json:"Description,omitempty"`
    DisableTemplateValidation *bool `json:"DisableTemplateValidation,omitempty"`
    Info map[string]string `json:"Info"`
    Name *string `json:"Name,omitempty"`
    Type *ProvisioningArtifactTypeEnum `json:"Type,omitempty"`
    
}

