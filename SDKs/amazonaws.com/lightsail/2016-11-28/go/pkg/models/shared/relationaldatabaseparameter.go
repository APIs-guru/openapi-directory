package shared

type RelationalDatabaseParameter struct {
	AllowedValues  *string `json:"allowedValues,omitempty"`
	ApplyMethod    *string `json:"applyMethod,omitempty"`
	ApplyType      *string `json:"applyType,omitempty"`
	DataType       *string `json:"dataType,omitempty"`
	Description    *string `json:"description,omitempty"`
	IsModifiable   *bool   `json:"isModifiable,omitempty"`
	ParameterName  *string `json:"parameterName,omitempty"`
	ParameterValue *string `json:"parameterValue,omitempty"`
}
