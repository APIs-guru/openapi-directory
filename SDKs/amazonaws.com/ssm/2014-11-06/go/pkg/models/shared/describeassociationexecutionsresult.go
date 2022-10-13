package shared

type DescribeAssociationExecutionsResult struct {
	AssociationExecutions []AssociationExecution `json:"AssociationExecutions"`
	NextToken             *string                `json:"NextToken"`
}
