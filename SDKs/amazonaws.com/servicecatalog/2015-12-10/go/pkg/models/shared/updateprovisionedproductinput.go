package shared



type UpdateProvisionedProductInput struct {
    AcceptLanguage *string `json:"AcceptLanguage,omitempty"`
    PathID *string `json:"PathId,omitempty"`
    PathName *string `json:"PathName,omitempty"`
    ProductID *string `json:"ProductId,omitempty"`
    ProductName *string `json:"ProductName,omitempty"`
    ProvisionedProductID *string `json:"ProvisionedProductId,omitempty"`
    ProvisionedProductName *string `json:"ProvisionedProductName,omitempty"`
    ProvisioningArtifactID *string `json:"ProvisioningArtifactId,omitempty"`
    ProvisioningArtifactName *string `json:"ProvisioningArtifactName,omitempty"`
    ProvisioningParameters []UpdateProvisioningParameter `json:"ProvisioningParameters,omitempty"`
    ProvisioningPreferences *UpdateProvisioningPreferences `json:"ProvisioningPreferences,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    UpdateToken string `json:"UpdateToken"`
    
}

