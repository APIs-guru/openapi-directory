package shared

type BatchDisassociateServiceActionFromProvisioningArtifactInput struct {
	AcceptLanguage            *string                    `json:"AcceptLanguage,omitempty"`
	ServiceActionAssociations []ServiceActionAssociation `json:"ServiceActionAssociations"`
}
