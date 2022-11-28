package shared

// UserList
// List of users
type UserList struct {
	Items []UserItem `json:"items"`
	Range Range      `json:"range"`
}
