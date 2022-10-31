package shared



type DocumentParameter struct {
    DefaultValue *string `json:"DefaultValue,omitempty"`
    Description *string `json:"Description,omitempty"`
    Name *string `json:"Name,omitempty"`
    Type *DocumentParameterTypeEnum `json:"Type,omitempty"`
    
}

