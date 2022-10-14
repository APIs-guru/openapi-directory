package shared

type DescribeInstanceAssociationsStatusResult struct {
	InstanceAssociationStatusInfos []InstanceAssociationStatusInfo `json:"InstanceAssociationStatusInfos,omitempty"`
	NextToken                      *string                         `json:"NextToken,omitempty"`
}
