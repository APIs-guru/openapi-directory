package shared

type ImportAsProvisionedProductInput struct {
	AcceptLanguage         *string `json:"AcceptLanguage"`
	IdempotencyToken       string  `json:"IdempotencyToken"`
	PhysicalID             string  `json:"PhysicalId"`
	ProductID              string  `json:"ProductId"`
	ProvisionedProductName string  `json:"ProvisionedProductName"`
	ProvisioningArtifactID string  `json:"ProvisioningArtifactId"`
}
