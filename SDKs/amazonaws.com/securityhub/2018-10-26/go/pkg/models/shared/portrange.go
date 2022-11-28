package shared

// PortRange
// A range of ports.
type PortRange struct {
	Begin *int64 `json:"Begin,omitempty"`
	End   *int64 `json:"End,omitempty"`
}
