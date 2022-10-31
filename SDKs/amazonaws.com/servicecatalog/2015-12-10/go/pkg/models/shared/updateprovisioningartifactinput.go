package shared

type UpdateProvisioningArtifactInput struct {
	AcceptLanguage         *string                           `json:"AcceptLanguage,omitempty"`
	Active                 *bool                             `json:"Active,omitempty"`
	Description            *string                           `json:"Description,omitempty"`
	Guidance               *ProvisioningArtifactGuidanceEnum `json:"Guidance,omitempty"`
	Name                   *string                           `json:"Name,omitempty"`
	ProductID              string                            `json:"ProductId"`
	ProvisioningArtifactID string                            `json:"ProvisioningArtifactId"`
}
