package shared

type ListServiceActionsForProvisioningArtifactInput struct {
	AcceptLanguage         *string `json:"AcceptLanguage"`
	PageSize               *int64  `json:"PageSize"`
	PageToken              *string `json:"PageToken"`
	ProductID              string  `json:"ProductId"`
	ProvisioningArtifactID string  `json:"ProvisioningArtifactId"`
}
