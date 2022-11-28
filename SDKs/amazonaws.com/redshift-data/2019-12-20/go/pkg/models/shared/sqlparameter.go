package shared

// SQLParameter
// A parameter used in a SQL statement.
type SQLParameter struct {
	Name  string `json:"name"`
	Value string `json:"value"`
}
