package shared

type ScheduleAByStateRecipientTotals struct {
	CommitteeType     *string  `json:"committee_type"`
	CommitteeTypeFull *string  `json:"committee_type_full"`
	Count             *int32   `json:"count"`
	Cycle             *int32   `json:"cycle"`
	State             *string  `json:"state"`
	StateFull         *string  `json:"state_full"`
	Total             *float64 `json:"total"`
}
