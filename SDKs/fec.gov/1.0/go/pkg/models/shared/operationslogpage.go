package shared

type OperationsLogPage struct {
	Pagination *OffsetInfo     `json:"pagination,omitempty"`
	Results    []OperationsLog `json:"results,omitempty"`
}
