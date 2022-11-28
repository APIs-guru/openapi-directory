package shared

// ConcatenateExpression
// Used to combine dimension values to a single dimension.
type ConcatenateExpression struct {
	Delimiter      *string  `json:"delimiter,omitempty"`
	DimensionNames []string `json:"dimensionNames,omitempty"`
}
