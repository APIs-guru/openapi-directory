package shared

type DimensionCompatibilityCompatibilityEnum string

const (
	DimensionCompatibilityCompatibilityEnumCompatibilityUnspecified DimensionCompatibilityCompatibilityEnum = "COMPATIBILITY_UNSPECIFIED"
	DimensionCompatibilityCompatibilityEnumCompatible               DimensionCompatibilityCompatibilityEnum = "COMPATIBLE"
	DimensionCompatibilityCompatibilityEnumIncompatible             DimensionCompatibilityCompatibilityEnum = "INCOMPATIBLE"
)

// DimensionCompatibility
// The compatibility for a single dimension.
type DimensionCompatibility struct {
	Compatibility     *DimensionCompatibilityCompatibilityEnum `json:"compatibility,omitempty"`
	DimensionMetadata *DimensionMetadata                       `json:"dimensionMetadata,omitempty"`
}
