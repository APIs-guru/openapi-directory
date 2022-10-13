package shared

type ComparisonOperatorEnum string

const (
	ComparisonOperatorEnumEq          ComparisonOperatorEnum = "EQ"
	ComparisonOperatorEnumNe          ComparisonOperatorEnum = "NE"
	ComparisonOperatorEnumLe          ComparisonOperatorEnum = "LE"
	ComparisonOperatorEnumLt          ComparisonOperatorEnum = "LT"
	ComparisonOperatorEnumGe          ComparisonOperatorEnum = "GE"
	ComparisonOperatorEnumGt          ComparisonOperatorEnum = "GT"
	ComparisonOperatorEnumContains    ComparisonOperatorEnum = "CONTAINS"
	ComparisonOperatorEnumNotContains ComparisonOperatorEnum = "NOT_CONTAINS"
	ComparisonOperatorEnumBeginsWith  ComparisonOperatorEnum = "BEGINS_WITH"
	ComparisonOperatorEnumIn          ComparisonOperatorEnum = "IN"
	ComparisonOperatorEnumBetween     ComparisonOperatorEnum = "BETWEEN"
)
