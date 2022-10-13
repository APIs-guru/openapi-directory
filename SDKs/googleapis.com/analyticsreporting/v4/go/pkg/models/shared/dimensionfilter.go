package shared

type DimensionFilterOperatorEnum string

const (
	DimensionFilterOperatorEnumOperatorUnspecified DimensionFilterOperatorEnum = "OPERATOR_UNSPECIFIED"
	DimensionFilterOperatorEnumRegexp              DimensionFilterOperatorEnum = "REGEXP"
	DimensionFilterOperatorEnumBeginsWith          DimensionFilterOperatorEnum = "BEGINS_WITH"
	DimensionFilterOperatorEnumEndsWith            DimensionFilterOperatorEnum = "ENDS_WITH"
	DimensionFilterOperatorEnumPartial             DimensionFilterOperatorEnum = "PARTIAL"
	DimensionFilterOperatorEnumExact               DimensionFilterOperatorEnum = "EXACT"
	DimensionFilterOperatorEnumNumericEqual        DimensionFilterOperatorEnum = "NUMERIC_EQUAL"
	DimensionFilterOperatorEnumNumericGreaterThan  DimensionFilterOperatorEnum = "NUMERIC_GREATER_THAN"
	DimensionFilterOperatorEnumNumericLessThan     DimensionFilterOperatorEnum = "NUMERIC_LESS_THAN"
	DimensionFilterOperatorEnumInList              DimensionFilterOperatorEnum = "IN_LIST"
)

type DimensionFilter struct {
	CaseSensitive *bool                        `json:"caseSensitive"`
	DimensionName *string                      `json:"dimensionName"`
	Expressions   []string                     `json:"expressions"`
	Not           *bool                        `json:"not"`
	Operator      *DimensionFilterOperatorEnum `json:"operator"`
}
