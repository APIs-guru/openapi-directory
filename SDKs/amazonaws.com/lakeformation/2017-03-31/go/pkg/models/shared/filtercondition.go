package shared

type FilterCondition struct {
	ComparisonOperator *ComparisonOperatorEnum `json:"ComparisonOperator"`
	Field              *FieldNameStringEnum    `json:"Field"`
	StringValueList    []string                `json:"StringValueList"`
}
