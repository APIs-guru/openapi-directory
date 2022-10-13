package shared

type ScheduleAEfilePage struct {
	Pagination *OffsetInfo      `json:"pagination"`
	Results    []ScheduleAEfile `json:"results"`
}
