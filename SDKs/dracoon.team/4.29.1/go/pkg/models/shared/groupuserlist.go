package shared

// GroupUserList
// List of users
type GroupUserList struct {
	Items []GroupUser `json:"items"`
	Range Range       `json:"range"`
}
