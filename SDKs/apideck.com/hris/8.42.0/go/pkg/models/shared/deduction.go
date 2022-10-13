package shared

type Deduction struct {
	Amount *float64 `json:"amount"`
	Name   *string  `json:"name"`
}
