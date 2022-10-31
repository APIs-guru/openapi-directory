package shared



type DescribeAssociationExecutionTargetsResult struct {
    AssociationExecutionTargets []AssociationExecutionTarget `json:"AssociationExecutionTargets,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

