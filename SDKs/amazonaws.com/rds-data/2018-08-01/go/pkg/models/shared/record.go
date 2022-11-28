package shared

// Record
// A record returned by a call.
type Record struct {
	Values []Value `json:"values,omitempty"`
}
