package shared

type DescribeProvisioningParametersInput struct {
	AcceptLanguage           *string `json:"AcceptLanguage"`
	PathID                   *string `json:"PathId"`
	PathName                 *string `json:"PathName"`
	ProductID                *string `json:"ProductId"`
	ProductName              *string `json:"ProductName"`
	ProvisioningArtifactID   *string `json:"ProvisioningArtifactId"`
	ProvisioningArtifactName *string `json:"ProvisioningArtifactName"`
}
