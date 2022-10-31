package shared

type DescribeEffectiveInstanceAssociationsResult struct {
	Associations []InstanceAssociation `json:"Associations,omitempty"`
	NextToken    *string               `json:"NextToken,omitempty"`
}
