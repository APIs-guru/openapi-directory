package shared

type DescribeAssociationRequest struct {
	AssociationID      *string `json:"AssociationId"`
	AssociationVersion *string `json:"AssociationVersion"`
	InstanceID         *string `json:"InstanceId"`
	Name               *string `json:"Name"`
}
