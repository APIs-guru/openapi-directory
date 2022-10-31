package shared



type CopyProductInput struct {
    AcceptLanguage *string `json:"AcceptLanguage,omitempty"`
    CopyOptions []CopyOptionEnum `json:"CopyOptions,omitempty"`
    IdempotencyToken string `json:"IdempotencyToken"`
    SourceProductArn string `json:"SourceProductArn"`
    SourceProvisioningArtifactIdentifiers []map[string]string `json:"SourceProvisioningArtifactIdentifiers,omitempty"`
    TargetProductID *string `json:"TargetProductId,omitempty"`
    TargetProductName *string `json:"TargetProductName,omitempty"`
    
}

