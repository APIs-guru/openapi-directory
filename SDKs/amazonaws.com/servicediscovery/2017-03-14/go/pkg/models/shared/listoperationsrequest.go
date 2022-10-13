package shared

type ListOperationsRequest struct {
	Filters    []OperationFilter `json:"Filters"`
	MaxResults *int64            `json:"MaxResults"`
	NextToken  *string           `json:"NextToken"`
}
