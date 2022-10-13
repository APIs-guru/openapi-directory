package shared

type ScheduleAPage struct {
	Pagination *SeekInfo   `json:"pagination"`
	Results    []ScheduleA `json:"results"`
}
