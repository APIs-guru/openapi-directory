package shared

type AttributeDimension struct {
	AttributeType *AttributeTypeEnum `json:"AttributeType,omitempty"`
	Values        []string           `json:"Values"`
}
