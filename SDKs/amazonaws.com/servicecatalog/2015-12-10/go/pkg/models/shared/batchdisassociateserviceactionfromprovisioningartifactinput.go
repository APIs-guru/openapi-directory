package shared

type BatchDisassociateServiceActionFromProvisioningArtifactInput struct {
	AcceptLanguage            *string                    `json:"AcceptLanguage"`
	ServiceActionAssociations []ServiceActionAssociation `json:"ServiceActionAssociations"`
}
