package shared

type FilterCondition struct {
	ComparisonOperator *ComparisonOperatorEnum `json:"ComparisonOperator,omitempty"`
	Field              *FieldNameStringEnum    `json:"Field,omitempty"`
	StringValueList    []string                `json:"StringValueList,omitempty"`
}
