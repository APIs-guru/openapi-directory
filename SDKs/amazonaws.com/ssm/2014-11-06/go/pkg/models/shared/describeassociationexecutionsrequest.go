package shared



type DescribeAssociationExecutionsRequest struct {
    AssociationID string `json:"AssociationId"`
    Filters []AssociationExecutionFilter `json:"Filters,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

