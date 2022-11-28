package shared

type CheckCompatibilityRequestCompatibilityFilterEnum string

const (
	CheckCompatibilityRequestCompatibilityFilterEnumCompatibilityUnspecified CheckCompatibilityRequestCompatibilityFilterEnum = "COMPATIBILITY_UNSPECIFIED"
	CheckCompatibilityRequestCompatibilityFilterEnumCompatible               CheckCompatibilityRequestCompatibilityFilterEnum = "COMPATIBLE"
	CheckCompatibilityRequestCompatibilityFilterEnumIncompatible             CheckCompatibilityRequestCompatibilityFilterEnum = "INCOMPATIBLE"
)

// CheckCompatibilityRequest
// The request for compatibility information for a report's dimensions and metrics. Check compatibility provides a preview of the compatibility of a report; fields shared with the `runReport` request should be the same values as in your `runReport` request.
type CheckCompatibilityRequest struct {
	CompatibilityFilter *CheckCompatibilityRequestCompatibilityFilterEnum `json:"compatibilityFilter,omitempty"`
	DimensionFilter     *FilterExpression                                 `json:"dimensionFilter,omitempty"`
	Dimensions          []Dimension                                       `json:"dimensions,omitempty"`
	MetricFilter        *FilterExpression                                 `json:"metricFilter,omitempty"`
	Metrics             []Metric                                          `json:"metrics,omitempty"`
}
