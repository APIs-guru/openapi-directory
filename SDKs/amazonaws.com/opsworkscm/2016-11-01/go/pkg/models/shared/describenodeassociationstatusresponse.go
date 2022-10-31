package shared



type DescribeNodeAssociationStatusResponse struct {
    EngineAttributes []EngineAttribute `json:"EngineAttributes,omitempty"`
    NodeAssociationStatus *NodeAssociationStatusEnum `json:"NodeAssociationStatus,omitempty"`
    
}

