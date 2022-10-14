package shared

type ScheduleAByOccupation struct {
	CommitteeID string   `json:"committee_id"`
	Count       *int32   `json:"count,omitempty"`
	Cycle       int32    `json:"cycle"`
	Occupation  string   `json:"occupation"`
	Total       *float64 `json:"total,omitempty"`
}
