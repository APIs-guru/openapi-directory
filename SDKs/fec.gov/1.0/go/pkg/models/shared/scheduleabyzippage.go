package shared

type ScheduleAByZipPage struct {
	Pagination *OffsetInfo      `json:"pagination"`
	Results    []ScheduleAByZip `json:"results"`
}
