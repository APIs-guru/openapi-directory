package shared

type ScheduleAByStateCandidatePage struct {
	Pagination *OffsetInfo                 `json:"pagination"`
	Results    []ScheduleAByStateCandidate `json:"results"`
}
