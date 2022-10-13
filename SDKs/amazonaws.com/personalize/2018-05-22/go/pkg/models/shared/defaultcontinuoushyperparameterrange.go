package shared

type DefaultContinuousHyperParameterRange struct {
	IsTunable *bool    `json:"isTunable"`
	MaxValue  *float64 `json:"maxValue"`
	MinValue  *float64 `json:"minValue"`
	Name      *string  `json:"name"`
}
