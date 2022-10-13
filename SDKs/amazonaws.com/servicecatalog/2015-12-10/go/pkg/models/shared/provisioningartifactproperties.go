package shared

type ProvisioningArtifactProperties struct {
	Description               *string                       `json:"Description"`
	DisableTemplateValidation *bool                         `json:"DisableTemplateValidation"`
	Info                      map[string]string             `json:"Info"`
	Name                      *string                       `json:"Name"`
	Type                      *ProvisioningArtifactTypeEnum `json:"Type"`
}
