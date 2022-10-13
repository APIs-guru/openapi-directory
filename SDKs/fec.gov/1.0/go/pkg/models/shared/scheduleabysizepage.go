package shared

type ScheduleABySizePage struct {
	Pagination *OffsetInfo       `json:"pagination"`
	Results    []ScheduleABySize `json:"results"`
}
