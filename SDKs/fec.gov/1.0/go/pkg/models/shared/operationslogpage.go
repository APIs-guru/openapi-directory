package shared

type OperationsLogPage struct {
	Pagination *OffsetInfo     `json:"pagination"`
	Results    []OperationsLog `json:"results"`
}
