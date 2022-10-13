package shared

type MetricCompatibilityCompatibilityEnum string

const (
	MetricCompatibilityCompatibilityEnumCompatibilityUnspecified MetricCompatibilityCompatibilityEnum = "COMPATIBILITY_UNSPECIFIED"
	MetricCompatibilityCompatibilityEnumCompatible               MetricCompatibilityCompatibilityEnum = "COMPATIBLE"
	MetricCompatibilityCompatibilityEnumIncompatible             MetricCompatibilityCompatibilityEnum = "INCOMPATIBLE"
)

type MetricCompatibility struct {
	Compatibility  *MetricCompatibilityCompatibilityEnum `json:"compatibility"`
	MetricMetadata *MetricMetadata                       `json:"metricMetadata"`
}
