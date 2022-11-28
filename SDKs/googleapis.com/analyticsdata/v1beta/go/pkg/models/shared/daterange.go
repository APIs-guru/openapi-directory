package shared

// DateRange
// A contiguous set of days: startDate, startDate + 1, ..., endDate. Requests are allowed up to 4 date ranges.
type DateRange struct {
	EndDate   *string `json:"endDate,omitempty"`
	Name      *string `json:"name,omitempty"`
	StartDate *string `json:"startDate,omitempty"`
}
