package shared

type NodeAssociationStatusEnum string

const (
	NodeAssociationStatusEnumSuccess    NodeAssociationStatusEnum = "SUCCESS"
	NodeAssociationStatusEnumFailed     NodeAssociationStatusEnum = "FAILED"
	NodeAssociationStatusEnumInProgress NodeAssociationStatusEnum = "IN_PROGRESS"
)
