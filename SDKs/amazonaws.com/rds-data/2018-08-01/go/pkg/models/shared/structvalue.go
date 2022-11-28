package shared

// StructValue
// A structure value returned by a call.
type StructValue struct {
	Attributes []Value `json:"attributes,omitempty"`
}
