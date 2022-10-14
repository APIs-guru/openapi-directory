package shared

type ScheduleAByZip struct {
	CommitteeID string   `json:"committee_id"`
	Count       *int32   `json:"count,omitempty"`
	Cycle       int32    `json:"cycle"`
	State       *string  `json:"state,omitempty"`
	StateFull   *string  `json:"state_full,omitempty"`
	Total       *float64 `json:"total,omitempty"`
	Zip         string   `json:"zip"`
}
