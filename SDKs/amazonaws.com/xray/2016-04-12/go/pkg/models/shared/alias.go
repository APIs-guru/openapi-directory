package shared

// Alias
// An alias for an edge.
type Alias struct {
	Name  *string  `json:"Name,omitempty"`
	Names []string `json:"Names,omitempty"`
	Type  *string  `json:"Type,omitempty"`
}
