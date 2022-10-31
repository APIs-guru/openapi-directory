package shared

type ConcatenateExpression struct {
	Delimiter      *string  `json:"delimiter,omitempty"`
	DimensionNames []string `json:"dimensionNames,omitempty"`
}
