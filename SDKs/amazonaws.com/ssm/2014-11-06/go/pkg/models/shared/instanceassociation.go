package shared

type InstanceAssociation struct {
	AssociationID      *string `json:"AssociationId"`
	AssociationVersion *string `json:"AssociationVersion"`
	Content            *string `json:"Content"`
	InstanceID         *string `json:"InstanceId"`
}
