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
	ComparisonValue *string                   `json:"comparisonValue,omitempty"`
	MetricName      *string                   `json:"metricName,omitempty"`
	Not             *bool                     `json:"not,omitempty"`
	Operator        *MetricFilterOperatorEnum `json:"operator,omitempty"`
}
