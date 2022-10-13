package shared

type RoleAssignment struct {
	AssignedTo       *string `json:"assignedTo"`
	Etag             *string `json:"etag"`
	Kind             *string `json:"kind"`
	OrgUnitID        *string `json:"orgUnitId"`
	RoleAssignmentID *string `json:"roleAssignmentId"`
	RoleID           *string `json:"roleId"`
	ScopeType        *string `json:"scopeType"`
}
