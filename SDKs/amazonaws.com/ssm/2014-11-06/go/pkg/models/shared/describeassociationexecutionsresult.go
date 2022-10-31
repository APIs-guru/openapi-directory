package shared



type DescribeAssociationExecutionsResult struct {
    AssociationExecutions []AssociationExecution `json:"AssociationExecutions,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

