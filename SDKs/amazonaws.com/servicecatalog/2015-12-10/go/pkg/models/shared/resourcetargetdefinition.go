package shared



type ResourceTargetDefinition struct {
    Attribute *ResourceAttributeEnum `json:"Attribute,omitempty"`
    Name *string `json:"Name,omitempty"`
    RequiresRecreation *RequiresRecreationEnum `json:"RequiresRecreation,omitempty"`
    
}

