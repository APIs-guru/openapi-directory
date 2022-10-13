package shared

type ScheduleAByStateRecipientTotalsPage struct {
	Pagination *OffsetInfo                       `json:"pagination"`
	Results    []ScheduleAByStateRecipientTotals `json:"results"`
}
