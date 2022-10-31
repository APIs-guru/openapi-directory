package shared

type BatchAssociateServiceActionWithProvisioningArtifactInput struct {
	AcceptLanguage            *string                    `json:"AcceptLanguage,omitempty"`
	ServiceActionAssociations []ServiceActionAssociation `json:"ServiceActionAssociations"`
}
