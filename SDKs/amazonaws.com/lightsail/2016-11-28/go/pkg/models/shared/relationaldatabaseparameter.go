package shared

type RelationalDatabaseParameter struct {
	AllowedValues  *string `json:"allowedValues"`
	ApplyMethod    *string `json:"applyMethod"`
	ApplyType      *string `json:"applyType"`
	DataType       *string `json:"dataType"`
	Description    *string `json:"description"`
	IsModifiable   *bool   `json:"isModifiable"`
	ParameterName  *string `json:"parameterName"`
	ParameterValue *string `json:"parameterValue"`
}
