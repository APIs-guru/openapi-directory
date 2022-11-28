package shared

// GroupList
// List of groups
type GroupList struct {
	Items []Group `json:"items"`
	Range Range   `json:"range"`
}
