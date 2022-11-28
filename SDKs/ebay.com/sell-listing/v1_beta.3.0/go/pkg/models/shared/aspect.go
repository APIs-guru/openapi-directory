package shared

// Aspect
// The type that defines the fields for the item aspects.
type Aspect struct {
	Name   *string  `json:"name,omitempty"`
	Values []string `json:"values,omitempty"`
}
