package shared

// AccountUsage
// The number of functions and amount of storage in use.
type AccountUsage struct {
	FunctionCount *int64 `json:"FunctionCount,omitempty"`
	TotalCodeSize *int64 `json:"TotalCodeSize,omitempty"`
}
