package shared

// FilterCondition
// This structure describes the filtering of columns in a table based on a filter condition.
type FilterCondition struct {
	ComparisonOperator *ComparisonOperatorEnum `json:"ComparisonOperator,omitempty"`
	Field              *FieldNameStringEnum    `json:"Field,omitempty"`
	StringValueList    []string                `json:"StringValueList,omitempty"`
}
