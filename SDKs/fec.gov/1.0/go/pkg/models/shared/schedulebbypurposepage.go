package shared

type ScheduleBByPurposePage struct {
	Pagination *OffsetInfo          `json:"pagination"`
	Results    []ScheduleBByPurpose `json:"results"`
}
