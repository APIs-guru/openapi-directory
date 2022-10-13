package shared

type ScheduleEPage struct {
	Pagination *SeekInfo   `json:"pagination"`
	Results    []ScheduleE `json:"results"`
}
