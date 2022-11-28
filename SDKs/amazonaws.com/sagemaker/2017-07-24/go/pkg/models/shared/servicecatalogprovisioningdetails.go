package shared

// ServiceCatalogProvisioningDetails
// Details that you specify to provision a service catalog product. For information about service catalog, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service Catalog</a>.
type ServiceCatalogProvisioningDetails struct {
	PathID                 *string                 `json:"PathId,omitempty"`
	ProductID              string                  `json:"ProductId"`
	ProvisioningArtifactID string                  `json:"ProvisioningArtifactId"`
	ProvisioningParameters []ProvisioningParameter `json:"ProvisioningParameters,omitempty"`
}
