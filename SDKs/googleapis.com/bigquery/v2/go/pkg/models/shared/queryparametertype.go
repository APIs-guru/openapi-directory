package shared

type QueryParameterTypeStructTypes struct {
	Description *string             `json:"description,omitempty"`
	Name        *string             `json:"name,omitempty"`
	Type        *QueryParameterType `json:"type,omitempty"`
}

type QueryParameterType struct {
	ArrayType   *QueryParameterType             `json:"arrayType,omitempty"`
	StructTypes []QueryParameterTypeStructTypes `json:"structTypes,omitempty"`
	Type        *string                         `json:"type,omitempty"`
}
