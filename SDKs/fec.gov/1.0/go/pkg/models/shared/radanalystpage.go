package shared

type RadAnalystPage struct {
	Pagination *OffsetInfo  `json:"pagination,omitempty"`
	Results    []RadAnalyst `json:"results,omitempty"`
}
