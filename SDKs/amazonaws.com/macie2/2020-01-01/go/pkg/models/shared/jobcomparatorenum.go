package shared

type JobComparatorEnum string

const (
	JobComparatorEnumEq         JobComparatorEnum = "EQ"
	JobComparatorEnumGt         JobComparatorEnum = "GT"
	JobComparatorEnumGte        JobComparatorEnum = "GTE"
	JobComparatorEnumLt         JobComparatorEnum = "LT"
	JobComparatorEnumLte        JobComparatorEnum = "LTE"
	JobComparatorEnumNe         JobComparatorEnum = "NE"
	JobComparatorEnumContains   JobComparatorEnum = "CONTAINS"
	JobComparatorEnumStartsWith JobComparatorEnum = "STARTS_WITH"
)
