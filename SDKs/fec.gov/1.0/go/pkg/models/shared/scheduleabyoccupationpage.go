package shared

type ScheduleAByOccupationPage struct {
	Pagination *OffsetInfo             `json:"pagination"`
	Results    []ScheduleAByOccupation `json:"results"`
}
