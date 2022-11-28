package shared

// PortRangeFromTo
// A range of ports.
type PortRangeFromTo struct {
	From *int64 `json:"From,omitempty"`
	To   *int64 `json:"To,omitempty"`
}
