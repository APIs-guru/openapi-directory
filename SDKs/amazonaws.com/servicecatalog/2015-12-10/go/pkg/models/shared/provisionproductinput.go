package shared

type ProvisionProductInput struct {
	AcceptLanguage           *string                  `json:"AcceptLanguage"`
	NotificationArns         []string                 `json:"NotificationArns"`
	PathID                   *string                  `json:"PathId"`
	PathName                 *string                  `json:"PathName"`
	ProductID                *string                  `json:"ProductId"`
	ProductName              *string                  `json:"ProductName"`
	ProvisionToken           string                   `json:"ProvisionToken"`
	ProvisionedProductName   string                   `json:"ProvisionedProductName"`
	ProvisioningArtifactID   *string                  `json:"ProvisioningArtifactId"`
	ProvisioningArtifactName *string                  `json:"ProvisioningArtifactName"`
	ProvisioningParameters   []ProvisioningParameter  `json:"ProvisioningParameters"`
	ProvisioningPreferences  *ProvisioningPreferences `json:"ProvisioningPreferences"`
	Tags                     []Tag                    `json:"Tags"`
}
