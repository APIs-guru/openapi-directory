package shared

// SessionFilter
// Describes a filter for Session Manager information.
type SessionFilter struct {
	Key   SessionFilterKeyEnum `json:"key"`
	Value string               `json:"value"`
}
