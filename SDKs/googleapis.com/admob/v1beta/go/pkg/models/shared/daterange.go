package shared

// DateRange
// Specification of a single date range. Both dates are inclusive.
type DateRange struct {
	EndDate   *Date `json:"endDate,omitempty"`
	StartDate *Date `json:"startDate,omitempty"`
}
