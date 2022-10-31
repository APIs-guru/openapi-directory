package shared

type ProvisionProductInput struct {
	AcceptLanguage           *string                  `json:"AcceptLanguage,omitempty"`
	NotificationArns         []string                 `json:"NotificationArns,omitempty"`
	PathID                   *string                  `json:"PathId,omitempty"`
	PathName                 *string                  `json:"PathName,omitempty"`
	ProductID                *string                  `json:"ProductId,omitempty"`
	ProductName              *string                  `json:"ProductName,omitempty"`
	ProvisionToken           string                   `json:"ProvisionToken"`
	ProvisionedProductName   string                   `json:"ProvisionedProductName"`
	ProvisioningArtifactID   *string                  `json:"ProvisioningArtifactId,omitempty"`
	ProvisioningArtifactName *string                  `json:"ProvisioningArtifactName,omitempty"`
	ProvisioningParameters   []ProvisioningParameter  `json:"ProvisioningParameters,omitempty"`
	ProvisioningPreferences  *ProvisioningPreferences `json:"ProvisioningPreferences,omitempty"`
	Tags                     []Tag                    `json:"Tags,omitempty"`
}
