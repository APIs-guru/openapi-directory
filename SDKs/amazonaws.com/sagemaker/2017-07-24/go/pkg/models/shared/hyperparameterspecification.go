package shared

type HyperParameterSpecification struct {
	DefaultValue *string           `json:"DefaultValue"`
	Description  *string           `json:"Description"`
	IsRequired   *bool             `json:"IsRequired"`
	IsTunable    *bool             `json:"IsTunable"`
	Name         string            `json:"Name"`
	Range        *ParameterRange   `json:"Range"`
	Type         ParameterTypeEnum `json:"Type"`
}
