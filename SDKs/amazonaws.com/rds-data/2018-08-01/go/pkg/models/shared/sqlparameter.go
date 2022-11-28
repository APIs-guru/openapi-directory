package shared

// SQLParameter
// A parameter used in a SQL statement.
type SQLParameter struct {
	Name     *string       `json:"name,omitempty"`
	TypeHint *TypeHintEnum `json:"typeHint,omitempty"`
	Value    *Field        `json:"value,omitempty"`
}
