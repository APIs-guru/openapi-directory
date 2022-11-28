package shared

// Range
// Identifies where the sensitive data begins and ends.
type Range struct {
	End         *int64 `json:"End,omitempty"`
	Start       *int64 `json:"Start,omitempty"`
	StartColumn *int64 `json:"StartColumn,omitempty"`
}
