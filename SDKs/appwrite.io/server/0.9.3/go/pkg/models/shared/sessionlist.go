package shared

// SessionList
// Sessions List
type SessionList struct {
	Sessions []Session `json:"sessions"`
	Sum      int32     `json:"sum"`
}
