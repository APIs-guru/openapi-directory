package shared

type FilterConditionEnum string

const (
	FilterConditionEnumEq      FilterConditionEnum = "EQ"
	FilterConditionEnumIn      FilterConditionEnum = "IN"
	FilterConditionEnumBetween FilterConditionEnum = "BETWEEN"
)
