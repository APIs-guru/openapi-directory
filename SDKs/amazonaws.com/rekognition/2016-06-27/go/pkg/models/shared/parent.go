package shared

// Parent
// A parent label for a label. A label can have 0, 1, or more parents.
type Parent struct {
	Name *string `json:"Name,omitempty"`
}
