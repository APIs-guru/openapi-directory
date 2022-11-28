package shared

// DateRange
// A date range for the date filter.
type DateRange struct {
	Unit  *DateRangeUnitEnum `json:"Unit,omitempty"`
	Value *int64             `json:"Value,omitempty"`
}
