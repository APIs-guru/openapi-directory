package shared

type SegmentDimensionFilterOperatorEnum string

const (
	SegmentDimensionFilterOperatorEnumOperatorUnspecified SegmentDimensionFilterOperatorEnum = "OPERATOR_UNSPECIFIED"
	SegmentDimensionFilterOperatorEnumRegexp              SegmentDimensionFilterOperatorEnum = "REGEXP"
	SegmentDimensionFilterOperatorEnumBeginsWith          SegmentDimensionFilterOperatorEnum = "BEGINS_WITH"
	SegmentDimensionFilterOperatorEnumEndsWith            SegmentDimensionFilterOperatorEnum = "ENDS_WITH"
	SegmentDimensionFilterOperatorEnumPartial             SegmentDimensionFilterOperatorEnum = "PARTIAL"
	SegmentDimensionFilterOperatorEnumExact               SegmentDimensionFilterOperatorEnum = "EXACT"
	SegmentDimensionFilterOperatorEnumInList              SegmentDimensionFilterOperatorEnum = "IN_LIST"
	SegmentDimensionFilterOperatorEnumNumericLessThan     SegmentDimensionFilterOperatorEnum = "NUMERIC_LESS_THAN"
	SegmentDimensionFilterOperatorEnumNumericGreaterThan  SegmentDimensionFilterOperatorEnum = "NUMERIC_GREATER_THAN"
	SegmentDimensionFilterOperatorEnumNumericBetween      SegmentDimensionFilterOperatorEnum = "NUMERIC_BETWEEN"
)

type SegmentDimensionFilter struct {
	CaseSensitive      *bool                               `json:"caseSensitive"`
	DimensionName      *string                             `json:"dimensionName"`
	Expressions        []string                            `json:"expressions"`
	MaxComparisonValue *string                             `json:"maxComparisonValue"`
	MinComparisonValue *string                             `json:"minComparisonValue"`
	Operator           *SegmentDimensionFilterOperatorEnum `json:"operator"`
}
