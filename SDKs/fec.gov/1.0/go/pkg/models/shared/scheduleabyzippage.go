package shared

type ScheduleAByZipPage struct {
	Pagination *OffsetInfo      `json:"pagination,omitempty"`
	Results    []ScheduleAByZip `json:"results,omitempty"`
}
