package shared

// DateRange
// A contiguous set of days: startDate, startDate + 1 day, ..., endDate. The start and end dates are specified in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) date format `YYYY-MM-DD`.
type DateRange struct {
	EndDate   *string `json:"endDate,omitempty"`
	StartDate *string `json:"startDate,omitempty"`
}
