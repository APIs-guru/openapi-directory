package shared

// TableMember
// The properties of a table.
type TableMember struct {
	Name   *string `json:"name,omitempty"`
	Schema *string `json:"schema,omitempty"`
	Type   *string `json:"type,omitempty"`
}
