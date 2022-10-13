package shared

type DeleteProvisioningArtifactInput struct {
	AcceptLanguage         *string `json:"AcceptLanguage"`
	ProductID              string  `json:"ProductId"`
	ProvisioningArtifactID string  `json:"ProvisioningArtifactId"`
}
