package shared

type DescribeAssociationExecutionTargetsResult struct {
	AssociationExecutionTargets []AssociationExecutionTarget `json:"AssociationExecutionTargets"`
	NextToken                   *string                      `json:"NextToken"`
}
