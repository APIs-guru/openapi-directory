package shared

// ServiceCatalogProvisionedProductDetails
// Details of a provisioned service catalog product. For information about service catalog, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service Catalog</a>.
type ServiceCatalogProvisionedProductDetails struct {
	ProvisionedProductID            *string `json:"ProvisionedProductId,omitempty"`
	ProvisionedProductStatusMessage *string `json:"ProvisionedProductStatusMessage,omitempty"`
}
