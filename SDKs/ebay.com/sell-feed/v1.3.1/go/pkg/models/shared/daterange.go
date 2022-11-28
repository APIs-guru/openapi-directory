package shared

// DateRange
// The type that defines the fields for a date range.
type DateRange struct {
	From *string `json:"from,omitempty"`
	To   *string `json:"to,omitempty"`
}
