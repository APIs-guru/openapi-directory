package shared




type CheckCompatibilityRequestCompatibilityFilterEnum string

const (
    CheckCompatibilityRequestCompatibilityFilterEnumCompatibilityUnspecified CheckCompatibilityRequestCompatibilityFilterEnum = "COMPATIBILITY_UNSPECIFIED"
CheckCompatibilityRequestCompatibilityFilterEnumCompatible CheckCompatibilityRequestCompatibilityFilterEnum = "COMPATIBLE"
CheckCompatibilityRequestCompatibilityFilterEnumIncompatible CheckCompatibilityRequestCompatibilityFilterEnum = "INCOMPATIBLE"
)


type CheckCompatibilityRequest struct {
    CompatibilityFilter *CheckCompatibilityRequestCompatibilityFilterEnum `json:"compatibilityFilter,omitempty"`
    DimensionFilter *FilterExpression `json:"dimensionFilter,omitempty"`
    Dimensions []Dimension `json:"dimensions,omitempty"`
    MetricFilter *FilterExpression `json:"metricFilter,omitempty"`
    Metrics []Metric `json:"metrics,omitempty"`
    
}

