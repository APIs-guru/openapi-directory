package shared




type SegmentMetricFilterOperatorEnum string

const (
    SegmentMetricFilterOperatorEnumUnspecifiedOperator SegmentMetricFilterOperatorEnum = "UNSPECIFIED_OPERATOR"
SegmentMetricFilterOperatorEnumLessThan SegmentMetricFilterOperatorEnum = "LESS_THAN"
SegmentMetricFilterOperatorEnumGreaterThan SegmentMetricFilterOperatorEnum = "GREATER_THAN"
SegmentMetricFilterOperatorEnumEqual SegmentMetricFilterOperatorEnum = "EQUAL"
SegmentMetricFilterOperatorEnumBetween SegmentMetricFilterOperatorEnum = "BETWEEN"
)



type SegmentMetricFilterScopeEnum string

const (
    SegmentMetricFilterScopeEnumUnspecifiedScope SegmentMetricFilterScopeEnum = "UNSPECIFIED_SCOPE"
SegmentMetricFilterScopeEnumProduct SegmentMetricFilterScopeEnum = "PRODUCT"
SegmentMetricFilterScopeEnumHit SegmentMetricFilterScopeEnum = "HIT"
SegmentMetricFilterScopeEnumSession SegmentMetricFilterScopeEnum = "SESSION"
SegmentMetricFilterScopeEnumUser SegmentMetricFilterScopeEnum = "USER"
)


type SegmentMetricFilter struct {
    ComparisonValue *string `json:"comparisonValue,omitempty"`
    MaxComparisonValue *string `json:"maxComparisonValue,omitempty"`
    MetricName *string `json:"metricName,omitempty"`
    Operator *SegmentMetricFilterOperatorEnum `json:"operator,omitempty"`
    Scope *SegmentMetricFilterScopeEnum `json:"scope,omitempty"`
    
}

