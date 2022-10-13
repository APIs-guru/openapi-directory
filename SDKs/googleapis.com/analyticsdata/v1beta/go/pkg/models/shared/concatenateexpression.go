package shared

type ConcatenateExpression struct {
	Delimiter      *string  `json:"delimiter"`
	DimensionNames []string `json:"dimensionNames"`
}
