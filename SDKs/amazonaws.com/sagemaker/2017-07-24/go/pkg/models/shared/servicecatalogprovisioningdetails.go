package shared

type ServiceCatalogProvisioningDetails struct {
	PathID                 *string                 `json:"PathId"`
	ProductID              string                  `json:"ProductId"`
	ProvisioningArtifactID string                  `json:"ProvisioningArtifactId"`
	ProvisioningParameters []ProvisioningParameter `json:"ProvisioningParameters"`
}
