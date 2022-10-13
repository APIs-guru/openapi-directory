package shared

type BatchAssociateServiceActionWithProvisioningArtifactInput struct {
	AcceptLanguage            *string                    `json:"AcceptLanguage"`
	ServiceActionAssociations []ServiceActionAssociation `json:"ServiceActionAssociations"`
}
