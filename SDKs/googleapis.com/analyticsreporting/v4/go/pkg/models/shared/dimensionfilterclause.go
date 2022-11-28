package shared

type DimensionFilterClauseOperatorEnum string

const (
	DimensionFilterClauseOperatorEnumOperatorUnspecified DimensionFilterClauseOperatorEnum = "OPERATOR_UNSPECIFIED"
	DimensionFilterClauseOperatorEnumOr                  DimensionFilterClauseOperatorEnum = "OR"
	DimensionFilterClauseOperatorEnumAnd                 DimensionFilterClauseOperatorEnum = "AND"
)

// DimensionFilterClause
// A group of dimension filters. Set the operator value to specify how the filters are logically combined.
type DimensionFilterClause struct {
	Filters  []DimensionFilter                  `json:"filters,omitempty"`
	Operator *DimensionFilterClauseOperatorEnum `json:"operator,omitempty"`
}
