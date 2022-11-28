package shared

// NullTransport
// A transport type that does not do anything
type NullTransport struct {
	Dummy *string `json:"dummy,omitempty"`
	Type  string  `json:"type"`
}
