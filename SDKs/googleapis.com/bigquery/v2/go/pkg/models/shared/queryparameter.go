package shared



type QueryParameter struct {
    Name *string `json:"name,omitempty"`
    ParameterType *QueryParameterType `json:"parameterType,omitempty"`
    ParameterValue *QueryParameterValue `json:"parameterValue,omitempty"`
    
}

