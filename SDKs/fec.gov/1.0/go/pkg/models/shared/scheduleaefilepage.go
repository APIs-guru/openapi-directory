package shared

type ScheduleAEfilePage struct {
	Pagination *OffsetInfo      `json:"pagination,omitempty"`
	Results    []ScheduleAEfile `json:"results,omitempty"`
}
