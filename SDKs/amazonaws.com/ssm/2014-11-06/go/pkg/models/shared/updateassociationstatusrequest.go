package shared

type UpdateAssociationStatusRequest struct {
	AssociationStatus AssociationStatus `json:"AssociationStatus"`
	InstanceID        string            `json:"InstanceId"`
	Name              string            `json:"Name"`
}
