package shared

type CreateEnvironmentTemplateInput struct {
	Description   *string           `json:"description"`
	DisplayName   *string           `json:"displayName"`
	EncryptionKey *string           `json:"encryptionKey"`
	Name          string            `json:"name"`
	Provisioning  *ProvisioningEnum `json:"provisioning"`
	Tags          []Tag             `json:"tags"`
}
