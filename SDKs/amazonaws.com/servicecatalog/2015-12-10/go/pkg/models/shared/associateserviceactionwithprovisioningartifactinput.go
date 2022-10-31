package shared

type AssociateServiceActionWithProvisioningArtifactInput struct {
	AcceptLanguage         *string `json:"AcceptLanguage,omitempty"`
	ProductID              string  `json:"ProductId"`
	ProvisioningArtifactID string  `json:"ProvisioningArtifactId"`
	ServiceActionID        string  `json:"ServiceActionId"`
}
