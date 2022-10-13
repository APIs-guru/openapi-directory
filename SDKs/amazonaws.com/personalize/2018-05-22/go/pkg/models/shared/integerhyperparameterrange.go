package shared

type IntegerHyperParameterRange struct {
	MaxValue *int64  `json:"maxValue"`
	MinValue *int64  `json:"minValue"`
	Name     *string `json:"name"`
}
