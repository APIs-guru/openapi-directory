package shared

// ProvisioningArtifactProperties
// Information about a provisioning artifact (also known as a version) for a product.
type ProvisioningArtifactProperties struct {
	Description               *string                       `json:"Description,omitempty"`
	DisableTemplateValidation *bool                         `json:"DisableTemplateValidation,omitempty"`
	Info                      map[string]string             `json:"Info"`
	Name                      *string                       `json:"Name,omitempty"`
	Type                      *ProvisioningArtifactTypeEnum `json:"Type,omitempty"`
}
