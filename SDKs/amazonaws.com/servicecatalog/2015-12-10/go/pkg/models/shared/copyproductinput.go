package shared

type CopyProductInput struct {
	AcceptLanguage                        *string             `json:"AcceptLanguage"`
	CopyOptions                           []CopyOptionEnum    `json:"CopyOptions"`
	IdempotencyToken                      string              `json:"IdempotencyToken"`
	SourceProductArn                      string              `json:"SourceProductArn"`
	SourceProvisioningArtifactIdentifiers []map[string]string `json:"SourceProvisioningArtifactIdentifiers"`
	TargetProductID                       *string             `json:"TargetProductId"`
	TargetProductName                     *string             `json:"TargetProductName"`
}
