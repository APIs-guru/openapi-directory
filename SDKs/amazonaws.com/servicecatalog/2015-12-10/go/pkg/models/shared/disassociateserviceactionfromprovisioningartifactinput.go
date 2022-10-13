package shared

type DisassociateServiceActionFromProvisioningArtifactInput struct {
	AcceptLanguage         *string `json:"AcceptLanguage"`
	ProductID              string  `json:"ProductId"`
	ProvisioningArtifactID string  `json:"ProvisioningArtifactId"`
	ServiceActionID        string  `json:"ServiceActionId"`
}
