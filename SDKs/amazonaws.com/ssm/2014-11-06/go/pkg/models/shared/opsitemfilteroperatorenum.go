package shared

type OpsItemFilterOperatorEnum string

const (
	OpsItemFilterOperatorEnumEqual       OpsItemFilterOperatorEnum = "Equal"
	OpsItemFilterOperatorEnumContains    OpsItemFilterOperatorEnum = "Contains"
	OpsItemFilterOperatorEnumGreaterThan OpsItemFilterOperatorEnum = "GreaterThan"
	OpsItemFilterOperatorEnumLessThan    OpsItemFilterOperatorEnum = "LessThan"
)
