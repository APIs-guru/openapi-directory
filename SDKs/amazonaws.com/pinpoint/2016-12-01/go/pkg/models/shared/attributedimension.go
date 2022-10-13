package shared

type AttributeDimension struct {
	AttributeType *AttributeTypeEnum `json:"AttributeType"`
	Values        []string           `json:"Values"`
}
