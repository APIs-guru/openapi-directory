package shared

type ScheduleEByCandidatePage struct {
	Pagination *OffsetInfo            `json:"pagination"`
	Results    []ScheduleEByCandidate `json:"results"`
}
