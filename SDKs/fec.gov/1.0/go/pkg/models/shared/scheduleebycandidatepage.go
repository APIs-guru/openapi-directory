package shared

type ScheduleEByCandidatePage struct {
	Pagination *OffsetInfo            `json:"pagination,omitempty"`
	Results    []ScheduleEByCandidate `json:"results,omitempty"`
}
