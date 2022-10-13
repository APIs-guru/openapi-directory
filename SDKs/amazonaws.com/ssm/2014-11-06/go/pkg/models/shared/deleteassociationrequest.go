package shared

type DeleteAssociationRequest struct {
	AssociationID *string `json:"AssociationId"`
	InstanceID    *string `json:"InstanceId"`
	Name          *string `json:"Name"`
}
