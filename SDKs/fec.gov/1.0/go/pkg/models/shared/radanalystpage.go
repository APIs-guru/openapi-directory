package shared

type RadAnalystPage struct {
	Pagination *OffsetInfo  `json:"pagination"`
	Results    []RadAnalyst `json:"results"`
}
