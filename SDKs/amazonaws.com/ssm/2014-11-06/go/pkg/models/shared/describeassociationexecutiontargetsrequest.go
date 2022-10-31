package shared



type DescribeAssociationExecutionTargetsRequest struct {
    AssociationID string `json:"AssociationId"`
    ExecutionID string `json:"ExecutionId"`
    Filters []AssociationExecutionTargetsFilter `json:"Filters,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

