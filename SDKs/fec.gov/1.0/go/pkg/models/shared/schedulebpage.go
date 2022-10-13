package shared

type ScheduleBPage struct {
	Pagination *SeekInfo   `json:"pagination"`
	Results    []ScheduleB `json:"results"`
}
