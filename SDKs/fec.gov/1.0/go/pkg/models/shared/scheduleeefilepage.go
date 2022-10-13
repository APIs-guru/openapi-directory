package shared

type ScheduleEEfilePage struct {
	Pagination *OffsetInfo      `json:"pagination"`
	Results    []ScheduleEEfile `json:"results"`
}
