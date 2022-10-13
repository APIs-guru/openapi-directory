package shared

type ArrayValue struct {
	ArrayValues   []ArrayValue `json:"arrayValues"`
	BooleanValues []bool       `json:"booleanValues"`
	DoubleValues  []float64    `json:"doubleValues"`
	LongValues    []int64      `json:"longValues"`
	StringValues  []string     `json:"stringValues"`
}
