package shared

type DocumentParameter struct {
	DefaultValue *string                    `json:"DefaultValue"`
	Description  *string                    `json:"Description"`
	Name         *string                    `json:"Name"`
	Type         *DocumentParameterTypeEnum `json:"Type"`
}
