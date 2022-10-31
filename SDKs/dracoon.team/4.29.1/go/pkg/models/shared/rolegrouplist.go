package shared

type RoleGroupList struct {
	Items []RoleGroup `json:"items"`
	Range Range       `json:"range"`
}
