package shared

type DefaultIntegerHyperParameterRange struct {
	IsTunable *bool   `json:"isTunable"`
	MaxValue  *int64  `json:"maxValue"`
	MinValue  *int64  `json:"minValue"`
	Name      *string `json:"name"`
}
