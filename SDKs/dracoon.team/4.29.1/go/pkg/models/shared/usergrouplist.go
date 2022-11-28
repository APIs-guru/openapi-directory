package shared

// UserGroupList
// List of groups
type UserGroupList struct {
	Items []UserGroup `json:"items"`
	Range Range       `json:"range"`
}
