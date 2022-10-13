package shared

type DescribeEffectiveInstanceAssociationsResult struct {
	Associations []InstanceAssociation `json:"Associations"`
	NextToken    *string               `json:"NextToken"`
}
