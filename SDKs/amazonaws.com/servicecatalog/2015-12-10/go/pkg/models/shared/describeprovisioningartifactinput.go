package shared

type DescribeProvisioningArtifactInput struct {
	AcceptLanguage           *string `json:"AcceptLanguage"`
	ProductID                *string `json:"ProductId"`
	ProductName              *string `json:"ProductName"`
	ProvisioningArtifactID   *string `json:"ProvisioningArtifactId"`
	ProvisioningArtifactName *string `json:"ProvisioningArtifactName"`
	Verbose                  *bool   `json:"Verbose"`
}
