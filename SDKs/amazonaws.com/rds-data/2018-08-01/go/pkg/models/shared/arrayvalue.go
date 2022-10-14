package shared

type ArrayValue struct {
	ArrayValues   []ArrayValue `json:"arrayValues,omitempty"`
	BooleanValues []bool       `json:"booleanValues,omitempty"`
	DoubleValues  []float64    `json:"doubleValues,omitempty"`
	LongValues    []int64      `json:"longValues,omitempty"`
	StringValues  []string     `json:"stringValues,omitempty"`
}
