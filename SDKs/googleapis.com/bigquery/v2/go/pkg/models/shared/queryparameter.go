package shared

type QueryParameter struct {
	Name           *string              `json:"name"`
	ParameterType  *QueryParameterType  `json:"parameterType"`
	ParameterValue *QueryParameterValue `json:"parameterValue"`
}
