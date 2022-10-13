package shared

type DescribeInstanceAssociationsStatusResult struct {
	InstanceAssociationStatusInfos []InstanceAssociationStatusInfo `json:"InstanceAssociationStatusInfos"`
	NextToken                      *string                         `json:"NextToken"`
}
