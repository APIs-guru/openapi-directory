package shared

type DescribeAssociationExecutionsRequest struct {
	AssociationID string                       `json:"AssociationId"`
	Filters       []AssociationExecutionFilter `json:"Filters"`
	MaxResults    *int64                       `json:"MaxResults"`
	NextToken     *string                      `json:"NextToken"`
}
