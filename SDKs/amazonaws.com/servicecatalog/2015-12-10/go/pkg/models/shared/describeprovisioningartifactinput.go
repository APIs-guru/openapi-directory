package shared



type DescribeProvisioningArtifactInput struct {
    AcceptLanguage *string `json:"AcceptLanguage,omitempty"`
    ProductID *string `json:"ProductId,omitempty"`
    ProductName *string `json:"ProductName,omitempty"`
    ProvisioningArtifactID *string `json:"ProvisioningArtifactId,omitempty"`
    ProvisioningArtifactName *string `json:"ProvisioningArtifactName,omitempty"`
    Verbose *bool `json:"Verbose,omitempty"`
    
}

