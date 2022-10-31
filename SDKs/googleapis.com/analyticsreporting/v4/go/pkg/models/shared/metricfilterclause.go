package shared

type MetricFilterClauseOperatorEnum string

const (
	MetricFilterClauseOperatorEnumOperatorUnspecified MetricFilterClauseOperatorEnum = "OPERATOR_UNSPECIFIED"
	MetricFilterClauseOperatorEnumOr                  MetricFilterClauseOperatorEnum = "OR"
	MetricFilterClauseOperatorEnumAnd                 MetricFilterClauseOperatorEnum = "AND"
)

type MetricFilterClause struct {
	Filters  []MetricFilter                  `json:"filters,omitempty"`
	Operator *MetricFilterClauseOperatorEnum `json:"operator,omitempty"`
}
