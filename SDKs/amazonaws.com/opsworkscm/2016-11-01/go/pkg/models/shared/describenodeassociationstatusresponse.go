package shared

type DescribeNodeAssociationStatusResponse struct {
	EngineAttributes      []EngineAttribute          `json:"EngineAttributes"`
	NodeAssociationStatus *NodeAssociationStatusEnum `json:"NodeAssociationStatus"`
}
