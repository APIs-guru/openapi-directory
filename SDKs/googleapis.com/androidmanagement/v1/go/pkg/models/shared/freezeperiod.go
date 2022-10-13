package shared

type FreezePeriod struct {
	EndDate   *Date `json:"endDate"`
	StartDate *Date `json:"startDate"`
}
