package shared

// FailedServiceActionAssociation
// An object containing information about the error, along with identifying information about the self-service action and its associations.
type FailedServiceActionAssociation struct {
	ErrorCode              *ServiceActionAssociationErrorCodeEnum `json:"ErrorCode,omitempty"`
	ErrorMessage           *string                                `json:"ErrorMessage,omitempty"`
	ProductID              *string                                `json:"ProductId,omitempty"`
	ProvisioningArtifactID *string                                `json:"ProvisioningArtifactId,omitempty"`
	ServiceActionID        *string                                `json:"ServiceActionId,omitempty"`
}
