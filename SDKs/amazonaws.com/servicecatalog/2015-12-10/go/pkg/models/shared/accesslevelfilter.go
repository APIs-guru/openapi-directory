package shared

// AccessLevelFilter
// The access level to use to filter results.
type AccessLevelFilter struct {
	Key   *AccessLevelFilterKeyEnum `json:"Key,omitempty"`
	Value *string                   `json:"Value,omitempty"`
}
