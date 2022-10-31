package shared



type CreateProductInput struct {
    AcceptLanguage *string `json:"AcceptLanguage,omitempty"`
    Description *string `json:"Description,omitempty"`
    Distributor *string `json:"Distributor,omitempty"`
    IdempotencyToken string `json:"IdempotencyToken"`
    Name string `json:"Name"`
    Owner string `json:"Owner"`
    ProductType ProductTypeEnum `json:"ProductType"`
    ProvisioningArtifactParameters ProvisioningArtifactProperties `json:"ProvisioningArtifactParameters"`
    SupportDescription *string `json:"SupportDescription,omitempty"`
    SupportEmail *string `json:"SupportEmail,omitempty"`
    SupportURL *string `json:"SupportUrl,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

