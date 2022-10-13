package shared

type DimensionFilterClauseOperatorEnum string

const (
	DimensionFilterClauseOperatorEnumOperatorUnspecified DimensionFilterClauseOperatorEnum = "OPERATOR_UNSPECIFIED"
	DimensionFilterClauseOperatorEnumOr                  DimensionFilterClauseOperatorEnum = "OR"
	DimensionFilterClauseOperatorEnumAnd                 DimensionFilterClauseOperatorEnum = "AND"
)

type DimensionFilterClause struct {
	Filters  []DimensionFilter                  `json:"filters"`
	Operator *DimensionFilterClauseOperatorEnum `json:"operator"`
}
