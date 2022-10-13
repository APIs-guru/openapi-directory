package shared

type ContinuousHyperParameterRange struct {
	MaxValue *float64 `json:"maxValue"`
	MinValue *float64 `json:"minValue"`
	Name     *string  `json:"name"`
}
