package shared

// Product
// Contains details about a product.
type Product struct {
	ActivationURL                     *string               `json:"ActivationUrl,omitempty"`
	Categories                        []string              `json:"Categories,omitempty"`
	CompanyName                       *string               `json:"CompanyName,omitempty"`
	Description                       *string               `json:"Description,omitempty"`
	IntegrationTypes                  []IntegrationTypeEnum `json:"IntegrationTypes,omitempty"`
	MarketplaceURL                    *string               `json:"MarketplaceUrl,omitempty"`
	ProductArn                        string                `json:"ProductArn"`
	ProductName                       *string               `json:"ProductName,omitempty"`
	ProductSubscriptionResourcePolicy *string               `json:"ProductSubscriptionResourcePolicy,omitempty"`
}
