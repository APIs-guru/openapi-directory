package shared



type CreateProvisioningArtifactInput struct {
    AcceptLanguage *string `json:"AcceptLanguage,omitempty"`
    IdempotencyToken string `json:"IdempotencyToken"`
    Parameters ProvisioningArtifactProperties `json:"Parameters"`
    ProductID string `json:"ProductId"`
    
}

