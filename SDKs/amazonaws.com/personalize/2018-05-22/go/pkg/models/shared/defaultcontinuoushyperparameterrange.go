package shared

type DefaultContinuousHyperParameterRange struct {
	IsTunable *bool    `json:"isTunable,omitempty"`
	MaxValue  *float64 `json:"maxValue,omitempty"`
	MinValue  *float64 `json:"minValue,omitempty"`
	Name      *string  `json:"name,omitempty"`
}
