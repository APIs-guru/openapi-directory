package shared

type FreezePeriod struct {
	EndDate   *Date `json:"endDate,omitempty"`
	StartDate *Date `json:"startDate,omitempty"`
}
