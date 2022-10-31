package shared

type ScheduleAByEmployerPage struct {
	Pagination *OffsetInfo           `json:"pagination,omitempty"`
	Results    []ScheduleAByEmployer `json:"results,omitempty"`
}
