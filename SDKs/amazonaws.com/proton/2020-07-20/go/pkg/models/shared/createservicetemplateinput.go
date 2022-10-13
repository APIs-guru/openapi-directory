package shared

type CreateServiceTemplateInput struct {
	Description          *string           `json:"description"`
	DisplayName          *string           `json:"displayName"`
	EncryptionKey        *string           `json:"encryptionKey"`
	Name                 string            `json:"name"`
	PipelineProvisioning *ProvisioningEnum `json:"pipelineProvisioning"`
	Tags                 []Tag             `json:"tags"`
}
