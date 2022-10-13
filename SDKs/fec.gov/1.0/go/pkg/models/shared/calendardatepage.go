package shared

type CalendarDatePage struct {
	Pagination *OffsetInfo    `json:"pagination"`
	Results    []CalendarDate `json:"results"`
}
