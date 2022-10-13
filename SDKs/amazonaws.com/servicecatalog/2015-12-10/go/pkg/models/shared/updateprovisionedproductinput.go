package shared

type UpdateProvisionedProductInput struct {
	AcceptLanguage           *string                        `json:"AcceptLanguage"`
	PathID                   *string                        `json:"PathId"`
	PathName                 *string                        `json:"PathName"`
	ProductID                *string                        `json:"ProductId"`
	ProductName              *string                        `json:"ProductName"`
	ProvisionedProductID     *string                        `json:"ProvisionedProductId"`
	ProvisionedProductName   *string                        `json:"ProvisionedProductName"`
	ProvisioningArtifactID   *string                        `json:"ProvisioningArtifactId"`
	ProvisioningArtifactName *string                        `json:"ProvisioningArtifactName"`
	ProvisioningParameters   []UpdateProvisioningParameter  `json:"ProvisioningParameters"`
	ProvisioningPreferences  *UpdateProvisioningPreferences `json:"ProvisioningPreferences"`
	Tags                     []Tag                          `json:"Tags"`
	UpdateToken              string                         `json:"UpdateToken"`
}
