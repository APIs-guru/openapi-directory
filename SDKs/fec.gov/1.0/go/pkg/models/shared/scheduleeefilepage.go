package shared

type ScheduleEEfilePage struct {
	Pagination *OffsetInfo      `json:"pagination,omitempty"`
	Results    []ScheduleEEfile `json:"results,omitempty"`
}
