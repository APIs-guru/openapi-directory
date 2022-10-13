package shared

type MetricFilterOperatorEnum string

const (
	MetricFilterOperatorEnumOperatorUnspecified MetricFilterOperatorEnum = "OPERATOR_UNSPECIFIED"
	MetricFilterOperatorEnumEqual               MetricFilterOperatorEnum = "EQUAL"
	MetricFilterOperatorEnumLessThan            MetricFilterOperatorEnum = "LESS_THAN"
	MetricFilterOperatorEnumGreaterThan         MetricFilterOperatorEnum = "GREATER_THAN"
	MetricFilterOperatorEnumIsMissing           MetricFilterOperatorEnum = "IS_MISSING"
)

type MetricFilter struct {
	ComparisonValue *string                   `json:"comparisonValue"`
	MetricName      *string                   `json:"metricName"`
	Not             *bool                     `json:"not"`
	Operator        *MetricFilterOperatorEnum `json:"operator"`
}
