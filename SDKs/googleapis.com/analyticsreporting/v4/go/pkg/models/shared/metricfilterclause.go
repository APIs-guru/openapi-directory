package shared

type MetricFilterClauseOperatorEnum string

const (
	MetricFilterClauseOperatorEnumOperatorUnspecified MetricFilterClauseOperatorEnum = "OPERATOR_UNSPECIFIED"
	MetricFilterClauseOperatorEnumOr                  MetricFilterClauseOperatorEnum = "OR"
	MetricFilterClauseOperatorEnumAnd                 MetricFilterClauseOperatorEnum = "AND"
)

// MetricFilterClause
// Represents a group of metric filters. Set the operator value to specify how the filters are logically combined.
type MetricFilterClause struct {
	Filters  []MetricFilter                  `json:"filters,omitempty"`
	Operator *MetricFilterClauseOperatorEnum `json:"operator,omitempty"`
}
