package shared

type ScheduleBEfilePage struct {
	Pagination *OffsetInfo      `json:"pagination"`
	Results    []ScheduleBEfile `json:"results"`
}
