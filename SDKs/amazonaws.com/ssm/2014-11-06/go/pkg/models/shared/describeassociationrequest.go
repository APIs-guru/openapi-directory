package shared



type DescribeAssociationRequest struct {
    AssociationID *string `json:"AssociationId,omitempty"`
    AssociationVersion *string `json:"AssociationVersion,omitempty"`
    InstanceID *string `json:"InstanceId,omitempty"`
    Name *string `json:"Name,omitempty"`
    
}

