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

// SegmentDimensionFilter
// Dimension filter specifies the filtering options on a dimension.
type SegmentDimensionFilter struct {
	CaseSensitive      *bool                               `json:"caseSensitive,omitempty"`
	DimensionName      *string                             `json:"dimensionName,omitempty"`
	Expressions        []string                            `json:"expressions,omitempty"`
	MaxComparisonValue *string                             `json:"maxComparisonValue,omitempty"`
	MinComparisonValue *string                             `json:"minComparisonValue,omitempty"`
	Operator           *SegmentDimensionFilterOperatorEnum `json:"operator,omitempty"`
}
