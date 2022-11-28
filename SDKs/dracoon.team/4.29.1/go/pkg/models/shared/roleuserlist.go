package shared

// RoleUserList
// List of users with assigned role
type RoleUserList struct {
	Items []RoleUser `json:"items"`
	Range Range      `json:"range"`
}
