package shared

// DescribeProvisionedProductInput
// DescribeProvisionedProductAPI input structure. AcceptLanguage - [Optional] The language code for localization. Id - [Optional] The provisioned product identifier. Name - [Optional] Another provisioned product identifier. Customers must provide either Id or Name.
type DescribeProvisionedProductInput struct {
	AcceptLanguage *string `json:"AcceptLanguage,omitempty"`
	ID             *string `json:"Id,omitempty"`
	Name           *string `json:"Name,omitempty"`
}
