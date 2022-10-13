package shared

type FailedServiceActionAssociation struct {
	ErrorCode              *ServiceActionAssociationErrorCodeEnum `json:"ErrorCode"`
	ErrorMessage           *string                                `json:"ErrorMessage"`
	ProductID              *string                                `json:"ProductId"`
	ProvisioningArtifactID *string                                `json:"ProvisioningArtifactId"`
	ServiceActionID        *string                                `json:"ServiceActionId"`
}
