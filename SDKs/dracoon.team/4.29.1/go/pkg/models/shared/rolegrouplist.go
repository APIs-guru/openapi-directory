package shared

// RoleGroupList
// List of groups with assigned role
type RoleGroupList struct {
	Items []RoleGroup `json:"items"`
	Range Range       `json:"range"`
}
