package shared



type CreateServiceTemplateInput struct {
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    EncryptionKey *string `json:"encryptionKey,omitempty"`
    Name string `json:"name"`
    PipelineProvisioning *ProvisioningEnum `json:"pipelineProvisioning,omitempty"`
    Tags []Tag `json:"tags,omitempty"`
    
}

