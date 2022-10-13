package shared

type CheckCompatibilityRequestCompatibilityFilterEnum string

const (
	CheckCompatibilityRequestCompatibilityFilterEnumCompatibilityUnspecified CheckCompatibilityRequestCompatibilityFilterEnum = "COMPATIBILITY_UNSPECIFIED"
	CheckCompatibilityRequestCompatibilityFilterEnumCompatible               CheckCompatibilityRequestCompatibilityFilterEnum = "COMPATIBLE"
	CheckCompatibilityRequestCompatibilityFilterEnumIncompatible             CheckCompatibilityRequestCompatibilityFilterEnum = "INCOMPATIBLE"
)

type CheckCompatibilityRequest struct {
	CompatibilityFilter *CheckCompatibilityRequestCompatibilityFilterEnum `json:"compatibilityFilter"`
	DimensionFilter     *FilterExpression                                 `json:"dimensionFilter"`
	Dimensions          []Dimension                                       `json:"dimensions"`
	MetricFilter        *FilterExpression                                 `json:"metricFilter"`
	Metrics             []Metric                                          `json:"metrics"`
}
