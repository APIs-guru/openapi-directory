package shared

type ScheduleAByOccupationPage struct {
	Pagination *OffsetInfo             `json:"pagination,omitempty"`
	Results    []ScheduleAByOccupation `json:"results,omitempty"`
}
