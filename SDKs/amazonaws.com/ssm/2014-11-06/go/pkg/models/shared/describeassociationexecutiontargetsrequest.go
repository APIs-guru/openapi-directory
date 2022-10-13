package shared

type DescribeAssociationExecutionTargetsRequest struct {
	AssociationID string                              `json:"AssociationId"`
	ExecutionID   string                              `json:"ExecutionId"`
	Filters       []AssociationExecutionTargetsFilter `json:"Filters"`
	MaxResults    *int64                              `json:"MaxResults"`
	NextToken     *string                             `json:"NextToken"`
}
