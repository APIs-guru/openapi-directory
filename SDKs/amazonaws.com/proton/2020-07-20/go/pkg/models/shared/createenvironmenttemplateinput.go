package shared



type CreateEnvironmentTemplateInput struct {
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    EncryptionKey *string `json:"encryptionKey,omitempty"`
    Name string `json:"name"`
    Provisioning *ProvisioningEnum `json:"provisioning,omitempty"`
    Tags []Tag `json:"tags,omitempty"`
    
}

