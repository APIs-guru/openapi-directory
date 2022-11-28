package shared

// QuotaPeriod
// Information about the quota period.
type QuotaPeriod struct {
	PeriodUnit  *PeriodUnitEnum `json:"PeriodUnit,omitempty"`
	PeriodValue *int64          `json:"PeriodValue,omitempty"`
}
