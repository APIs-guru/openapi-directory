package shared

type ScheduleAByStatePage struct {
	Pagination *OffsetInfo        `json:"pagination"`
	Results    []ScheduleAByState `json:"results"`
}
