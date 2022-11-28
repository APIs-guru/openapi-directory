package shared

// AttributeDimension
// Specifies attribute-based criteria for including or excluding endpoints from a segment.
type AttributeDimension struct {
	AttributeType *AttributeTypeEnum `json:"AttributeType,omitempty"`
	Values        []string           `json:"Values"`
}
