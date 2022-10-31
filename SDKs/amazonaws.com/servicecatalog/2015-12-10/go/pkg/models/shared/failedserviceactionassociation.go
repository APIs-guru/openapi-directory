package shared

type FailedServiceActionAssociation struct {
	ErrorCode              *ServiceActionAssociationErrorCodeEnum `json:"ErrorCode,omitempty"`
	ErrorMessage           *string                                `json:"ErrorMessage,omitempty"`
	ProductID              *string                                `json:"ProductId,omitempty"`
	ProvisioningArtifactID *string                                `json:"ProvisioningArtifactId,omitempty"`
	ServiceActionID        *string                                `json:"ServiceActionId,omitempty"`
}
