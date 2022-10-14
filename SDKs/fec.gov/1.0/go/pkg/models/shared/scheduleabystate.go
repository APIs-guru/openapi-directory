package shared

type ScheduleAByState struct {
	CommitteeID string   `json:"committee_id"`
	Count       *int32   `json:"count,omitempty"`
	Cycle       int32    `json:"cycle"`
	State       string   `json:"state"`
	StateFull   string   `json:"state_full"`
	Total       *float64 `json:"total,omitempty"`
}
