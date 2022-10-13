package shared

type ResourceTargetDefinition struct {
	Attribute          *ResourceAttributeEnum  `json:"Attribute"`
	Name               *string                 `json:"Name"`
	RequiresRecreation *RequiresRecreationEnum `json:"RequiresRecreation"`
}
