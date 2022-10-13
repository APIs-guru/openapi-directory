package shared

type ScheduleAByZip struct {
	CommitteeID string   `json:"committee_id"`
	Count       *int32   `json:"count"`
	Cycle       int32    `json:"cycle"`
	State       *string  `json:"state"`
	StateFull   *string  `json:"state_full"`
	Total       *float64 `json:"total"`
	Zip         string   `json:"zip"`
}
