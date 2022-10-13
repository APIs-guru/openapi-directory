package shared

type QuotaPeriod struct {
	PeriodUnit  *PeriodUnitEnum `json:"PeriodUnit"`
	PeriodValue *int64          `json:"PeriodValue"`
}
