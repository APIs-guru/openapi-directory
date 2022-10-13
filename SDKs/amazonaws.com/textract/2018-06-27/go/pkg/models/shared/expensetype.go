package shared

type ExpenseType struct {
	Confidence *float32 `json:"Confidence"`
	Text       *string  `json:"Text"`
}
