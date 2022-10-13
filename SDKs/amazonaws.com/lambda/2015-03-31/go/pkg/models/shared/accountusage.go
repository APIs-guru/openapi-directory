package shared

type AccountUsage struct {
	FunctionCount *int64 `json:"FunctionCount"`
	TotalCodeSize *int64 `json:"TotalCodeSize"`
}
