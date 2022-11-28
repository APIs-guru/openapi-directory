package shared

// AssociationExecutionFilter
// Filters used in the request.
type AssociationExecutionFilter struct {
	Key   AssociationExecutionFilterKeyEnum `json:"Key"`
	Type  AssociationFilterOperatorTypeEnum `json:"Type"`
	Value string                            `json:"Value"`
}
