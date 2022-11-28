package shared

// ColumnWildcard
// A wildcard object, consisting of an optional list of excluded column names or indexes.
type ColumnWildcard struct {
	ExcludedColumnNames []string `json:"ExcludedColumnNames,omitempty"`
}
