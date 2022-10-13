package shared

type Product struct {
	ActivationURL                     *string               `json:"ActivationUrl"`
	Categories                        []string              `json:"Categories"`
	CompanyName                       *string               `json:"CompanyName"`
	Description                       *string               `json:"Description"`
	IntegrationTypes                  []IntegrationTypeEnum `json:"IntegrationTypes"`
	MarketplaceURL                    *string               `json:"MarketplaceUrl"`
	ProductArn                        string                `json:"ProductArn"`
	ProductName                       *string               `json:"ProductName"`
	ProductSubscriptionResourcePolicy *string               `json:"ProductSubscriptionResourcePolicy"`
}
