package shared

type ScheduleABySizeCandidatePage struct {
	Pagination *OffsetInfo                `json:"pagination"`
	Results    []ScheduleABySizeCandidate `json:"results"`
}
