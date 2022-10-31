package shared



type QuotaPeriod struct {
    PeriodUnit *PeriodUnitEnum `json:"PeriodUnit,omitempty"`
    PeriodValue *int64 `json:"PeriodValue,omitempty"`
    
}

