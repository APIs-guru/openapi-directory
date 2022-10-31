package shared

type ScheduleABySizePage struct {
	Pagination *OffsetInfo       `json:"pagination,omitempty"`
	Results    []ScheduleABySize `json:"results,omitempty"`
}
