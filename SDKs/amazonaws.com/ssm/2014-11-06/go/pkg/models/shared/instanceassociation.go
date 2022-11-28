package shared

// InstanceAssociation
// One or more association documents on the instance.
type InstanceAssociation struct {
	AssociationID      *string `json:"AssociationId,omitempty"`
	AssociationVersion *string `json:"AssociationVersion,omitempty"`
	Content            *string `json:"Content,omitempty"`
	InstanceID         *string `json:"InstanceId,omitempty"`
}
