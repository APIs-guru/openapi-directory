package shared

type UpdateProvisioningArtifactInput struct {
	AcceptLanguage         *string                           `json:"AcceptLanguage"`
	Active                 *bool                             `json:"Active"`
	Description            *string                           `json:"Description"`
	Guidance               *ProvisioningArtifactGuidanceEnum `json:"Guidance"`
	Name                   *string                           `json:"Name"`
	ProductID              string                            `json:"ProductId"`
	ProvisioningArtifactID string                            `json:"ProvisioningArtifactId"`
}
