package shared

type DeleteProvisioningArtifactInput struct {
	AcceptLanguage         *string `json:"AcceptLanguage,omitempty"`
	ProductID              string  `json:"ProductId"`
	ProvisioningArtifactID string  `json:"ProvisioningArtifactId"`
}
