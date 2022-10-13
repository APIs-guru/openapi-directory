package shared

type ScheduleAByEmployerPage struct {
	Pagination *OffsetInfo           `json:"pagination"`
	Results    []ScheduleAByEmployer `json:"results"`
}
