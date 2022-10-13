package shared

type QueryParameterTypeStructTypes struct {
	Description *string             `json:"description"`
	Name        *string             `json:"name"`
	Type        *QueryParameterType `json:"type"`
}

type QueryParameterType struct {
	ArrayType   *QueryParameterType             `json:"arrayType"`
	StructTypes []QueryParameterTypeStructTypes `json:"structTypes"`
	Type        *string                         `json:"type"`
}
